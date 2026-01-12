export const SERVICES={
    API_GATEWAY:"api-gateway",
    AUTH_SERVICES:"auth-service",
    USERS_SERVICES:"users-services",
    EVENTS_SERVCES:"event-services",
    TICKETS_SERVICES:"tickets-services",
    PAYMENT_SERVICES:"payments-services",
    NOTIFICATIONS_SERVICES:"notification-services"
} as const;
export const SERVICES_PORTS={
    API_GATEWAY:3000,
    AUTH_SERVICES:3001,
    USERS_SERVICES:3002,
    EVENTS_SERVCES:3003,
    TICKETS_SERVICES:3004,
    PAYMENT_SERVICES:3005,
    NOTIFICATIONS_SERVICES:3006
} as const;