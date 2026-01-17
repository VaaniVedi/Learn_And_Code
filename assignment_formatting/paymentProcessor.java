package com.payment.processing;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

public class PaymentProcessor {

    private final Logger logger;
    private final NotificationService notificationService;
    private final Map<String, PaymentRecord> paymentHistory;

    public PaymentProcessor(
            Logger logger,
            NotificationService notificationService
    ) {
        this.logger = logger;
        this.notificationService = notificationService;
        this.paymentHistory = new HashMap<>();
    }

    public PaymentResult processPayment(
            PaymentRequest paymentRequest
    ) {
        validatePaymentRequest(paymentRequest);

        int retryAttemptCount = 0;

        while (retryAttemptCount
                < PaymentConstants.MAXIMUM_RETRY_ATTEMPTS) {
            try {
                executePayment(paymentRequest);
                recordPayment(paymentRequest);
                sendSuccessNotification(paymentRequest);

                return new PaymentResult(
                        true,
                        PaymentConstants.PAYMENT_SUCCESS_MESSAGE,
                        generateTransactionId()
                );
            } catch (PaymentException exception) {
                retryAttemptCount++;
                logger.log(
                        "Retry attempt: " + retryAttemptCount
                );
            }
        }

        return new PaymentResult(
                false,
                PaymentConstants.PAYMENT_FAILURE_MESSAGE,
                null
        );
    }

    private void validatePaymentRequest(
            PaymentRequest paymentRequest
    ) {
        if (paymentRequest.customerId() == null
                || paymentRequest.customerId().isBlank()) {
            throw new IllegalArgumentException(
                    "Customer ID required"
            );
        }

        if (paymentRequest.amount() == null
                || paymentRequest.amount().compareTo(
                        PaymentConstants.MINIMUM_PAYMENT_AMOUNT
                ) < 0) {
            throw new IllegalArgumentException(
                    "Invalid amount"
            );
        }
    }

    private void executePayment(
            PaymentRequest paymentRequest
    ) {
        logger.log(
                "Executing payment of "
                        + paymentRequest.amount()
        );

        if (paymentRequest.amount()
                .compareTo(new java.math.BigDecimal("5000")) > 0) {
            throw new PaymentException("Limit exceeded");
        }
    }

    private void recordPayment(
            PaymentRequest paymentRequest
    ) {
        paymentHistory.put(
                generateTransactionId(),
                new PaymentRecord(
                        paymentRequest.customerId(),
                        paymentRequest.amount(),
                        LocalDateTime.now()
                )
        );
    }

    private void sendSuccessNotification(
            PaymentRequest paymentRequest
    ) {
        notificationService.send(
                paymentRequest.customerId(),
                "Payment of "
                        + paymentRequest.amount()
                        + " processed"
        );
    }

    private String generateTransactionId() {
        return "TXN-" + System.currentTimeMillis();
    }
}

