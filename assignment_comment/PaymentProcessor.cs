public class PaymentProcessor
{
    private readonly IPaymentGateway _paymentGateway;

    public PaymentProcessor(IPaymentGateway paymentGateway)
    {
        _paymentGateway = paymentGateway;
    }

    public async Task<PaymentResult> Process(Order order)
    {
        return await _paymentGateway.ProcessPayment(
            order.CustomerId,
            order.TotalAmount,
            order.PaymentMethod);
    }

    public async Task Refund(string transactionId)
    {
        await _paymentGateway.RefundPayment(transactionId);
    }
}

