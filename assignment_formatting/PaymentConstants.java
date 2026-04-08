package com.payment.processing;

import java.math.BigDecimal;

public final class PaymentConstants {

    public static final BigDecimal MINIMUM_PAYMENT_AMOUNT =
            new BigDecimal("0.01");

    public static final int MAXIMUM_RETRY_ATTEMPTS = 2;

    public static final String PAYMENT_SUCCESS_MESSAGE =
            "Payment successful";

    public static final String PAYMENT_FAILURE_MESSAGE =
            "Payment failed";

    private PaymentConstants() {
    }
}

