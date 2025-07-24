export const AUTH_LINK = Object.freeze({
    LOGIN: '/login',
});

export const DASHBOARD_LINKS = Object.freeze({
    DASHBOARD: '/panel/dashboard',
});

export const USER_LINKS = Object.freeze({
    USER: '/panel/user',
    ADD_USER: '/panel/user/add',
    UPDATE_USER: '/panel/user/update',
});

export const DEMO_LINKS = Object.freeze({
    DEMO: '/panel/demo',
});

export const CUSTOMER_LINKS = Object.freeze({
    CUSTOMER: '/panel/customer',
    ADD_CUSTOMER: '/panel/customer/add',
    UPDATE_CUSTOMER: '/panel/customer/update/[customerId]',
    UPDATE_CUSTOMER_SUB: '/panel/customer/update',
    VIEW_CUSTOMER: '/panel/customer/view/[customerId]',
    VIEW_CUSTOMER_SUB: '/panel/customer/view',
    ACCOUNT_CUSTOMER: '/panel/customer/account/[customerId]',
    ACCOUNT_CUSTOMER_SUB: '/panel/customer/account',
});

export const EMPLOYEE_LINKS = Object.freeze({
    EMPLOYEE: '/panel/employee',
    ADD_EMPLOYEE: '/panel/employee/add',
    UPDATE_EMPLOYEE: '/panel/employee/update/[employeeId]',
    UPDATE_EMPLOYEE_SUB: '/panel/employee/update',
    VIEW_EMPLOYEE: '/panel/employee/view/[employeeId]',
    VIEW_EMPLOYEE_SUB: '/panel/employee/view',
});

export const ORDER_LINKS = Object.freeze({
    ORDER: '/panel/order',
    CREATE_ORDER: '/panel/order/create',
    VIEW_ORDER: '/panel/order/view/[orderId]',
    VIEW_ORDER_SUB: '/panel/order/view',
});