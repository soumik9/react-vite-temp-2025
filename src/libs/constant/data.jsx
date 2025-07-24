export const discountOptions = [
    { _id: 2, label: "Taka", value: "taka" },
    { _id: 3, label: "Percentage", value: "percentage" },
]

export const orderTableColums = [
    { name: 'Product name', className: 'text-left' },
    { name: 'Unit Price', className: 'text-center' },
    { name: 'Quantity', className: 'text-center' },
    { name: 'Discount', className: 'text-center' },
    { name: 'Unit Price (After Discount)', className: 'text-center' },
    { name: 'Total', className: 'text-center' }
];

export const statementTableColums = [
    { name: 'Date', className: 'text-left' },
    { name: 'Cash', className: 'text-center' },
    { name: 'Due', className: 'text-center' },
    { name: 'Return', className: 'text-center' },
    { name: 'Type', className: 'text-center' },
    { name: 'Balance', className: 'text-center' },
];

export const sliceOptions = [
    { _id: 1, label: 10, value: 10 },
    { _id: 2, label: 20, value: 20 },
    { _id: 3, label: 50, value: 50 },
    { _id: 4, label: 100, value: 100 },
    { _id: 5, label: 150, value: 150 },
    { _id: 6, label: 200, value: 200 },
    { _id: 7, label: 250, value: 250 },
]

export const dynamicInfos = [
    { title: 'Login', url: '/login' },
    { title: 'Dashboard', url: '/panel/dashboard' },
];