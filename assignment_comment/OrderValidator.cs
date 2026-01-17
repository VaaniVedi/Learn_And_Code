public class OrderValidator
{
    public bool IsValid(Order order)
    {
        return order != null &&
               order.Items?.Count > 0 &&
               order.TotalAmount > 0;
    }
}

