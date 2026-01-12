export const KAFKA_BROKER=process.env.KAFKA_BROKER?? "localhost:9902";
export const KAFKA_CLIENT_ID="eventflowApp";
export const KAFKA_CONSUMER_GROUP="eventflow-consumer-App";

export const KAFKA_TOPICS={
    USER_REGISTERED:'user.registered',
    USER_LOGIN:'user.login',
    PASSWORD_RESET_REQUESTED:"user.password-reset-requested",
    //EVENT
    EVENT_CREATED:"event.created",
    EVENT_UPDATED:"event.updated",
    EVENT_CANCELLED:"event.cancelled",

    //TICKET
    TICKET_PURCHASED:"ticket.purchased",
    TICKET_CANCELLED:"ticket.cancelled",
    TICKET_CHECKED_IN:"ticket.checked-in",

    //Payment
    PAYMENT_COMPLETED:'payment.completed',
    PAYMENT_FAILED:'payment.failed',
    PAYMENT_REFUNDED:'payment.refunded',

    //NOTIFICATION 
    SEND_MAIL:'notification.send_mail',
    SEND_PUSH:'notification.send_push'
} as const;

export type KafkaTopics=(typeof KAFKA_TOPICS)[keyof typeof KAFKA_TOPICS]