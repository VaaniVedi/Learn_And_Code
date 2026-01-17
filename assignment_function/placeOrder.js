function placeOrder(orderId, orderAmount) {
    if (isOrderInvalid(orderId)) {
        showInvalidOrderMessage();
        return;
    }

    finalOrderAmount = calculateFinalOrderAmount(orderAmount);
    saveOrder(orderId, finalOrderAmount);
    showOrderSuccessMessage();
}

function calculateFinalOrderAmount(orderAmount) {
    discountAmount = calculateDiscountAmount(orderAmount);
    taxAmount = calculateTaxAmount(orderAmount);
    return (orderAmount + taxAmount) - discountAmount;
}

function calculateDiscountAmount(orderAmount) {
    return orderAmount * 0.10;
}

function calculateTaxAmount(orderAmount) {
    return orderAmount * 0.18;
}

function isOrderInvalid(orderId) {
    return orderId <= 0;
}

function showInvalidOrderMessage() {
    print("Order cannot be empty");
}

function showOrderSuccessMessage() {
    print("Order placed successfully");
}

function saveOrder(orderId, finalOrderAmount) {
    print("Order saved in database");
}

