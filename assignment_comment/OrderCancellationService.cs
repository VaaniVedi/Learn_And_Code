public class OrderCancellationService
{
    private readonly PaymentProcessor _paymentProcessor;
    private readonly InventoryManager _inventoryManager;

    public OrderCancellationService(
        PaymentProcessor paymentProcessor,
        InventoryManager inventoryManager)
    {
        _paymentProcessor = paymentProcessor;
        _inventoryManager = inventoryManager;
    }

    public async Task Cancel(Order order)
    {
        if (order.Status == OrderStatus.Paid)
        {
            await _paymentProcessor.Refund(order.TransactionId);
            await _inventoryManager.Restore(order.Items);
        }

        order.Status = OrderStatus.Cancelled;
    }
}

