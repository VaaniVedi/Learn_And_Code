public class OrderProcessor
{
    private readonly OrderValidator _validator;
    private readonly InventoryManager _inventoryManager;
    private readonly PaymentProcessor _paymentProcessor;
    private readonly INotificationService _notificationService;

    public OrderProcessor(
        OrderValidator validator,
        InventoryManager inventoryManager,
        PaymentProcessor paymentProcessor,
        INotificationService notificationService)
    {
        _validator = validator;
        _inventoryManager = inventoryManager;
        _paymentProcessor = paymentProcessor;
        _notificationService = notificationService;
    }

    public async Task<OrderResult> ProcessOrder(Order order)
    {
        if (!_validator.IsValid(order))
        {
            return OrderResult.Invalid("Order validation failed");
        }

        if (!await _inventoryManager.HasInventory(order.Items))
        {
            return OrderResult.Failed("Insufficient inventory");
        }

        await _inventoryManager.Reserve(order.Items);

        try
        {
            var paymentResult = await _paymentProcessor.Process(order);

            if (!paymentResult.IsSuccessful)
            {
                await _inventoryManager.Release(order.Items);
                return OrderResult.Failed(paymentResult.ErrorMessage);
            }

            await _inventoryManager.Commit(order.Items);
            await _notificationService.SendOrderConfirmation(order);

            return OrderResult.Success(paymentResult.TransactionId);
        }
        catch
        {
            // Inventory must never remain reserved on failure
            await _inventoryManager.Release(order.Items);
            throw;
        }
    }
}

