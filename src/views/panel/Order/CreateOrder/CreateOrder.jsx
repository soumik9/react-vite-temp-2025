import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import React, { useState } from 'react';
import POS from './components/POS';
import SelectDetails from './components/SelectDetails';
import ProductPOSTable from './components/ProductPOSTable';
import { discountOptions } from '@/utils/constant/data';
import PrimaryButton from '@/components/Button/PrimaryButton';
import { errorNotify, successNotify } from '@/utils/hooks/notify';
import moment from 'moment';
import { useCreateOrderMutation } from '@/redux-rtk/features/order/orderApi';
import { useRouter } from 'next/router';
import { ORDER_LINKS } from '@/utils/enum/link';

const CreateOrder = () => {

    const router = useRouter();
    const [createOrder, { isLoading }] = useCreateOrderMutation();

    const [products, setProducts] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState({ _id: 1, label: "Select", value: "" });
    const [selectedEmployee, setSelectedEmployee] = useState({ _id: 1, label: "Select", value: "" });
    const [selectedDiscountType, setSelectedDiscountType] = useState(discountOptions[1]);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [credit, setCredit] = useState();
    const [labourCharge, setLabourCharge] = useState();
    const [discountOnTotal, setDiscountOnTotal] = useState();

    const calculateSubTotal = () => {
        return products.reduce((acc, product) => acc + product.total, 0);
    };

    const handleOrder = () => {

        if (!selectedCustomer.value || !selectedDate)
            return errorNotify('Customer and date are required!');

        if (products.length === 0)
            return errorNotify('Products are required!');

        // if (credit < 1 || !credit)
        //     return errorNotify('Credit amount must be greater than 0!');

        const data = {
            customer: selectedCustomer.value,
            reference: selectedEmployee.value ? selectedEmployee.value : undefined,
            products,
            date: moment(selectedDate).unix(),
            subTotal: calculateSubTotal(),
            total: calculateSubTotal() + Number(labourCharge ? labourCharge : 0),
            labourCharge: Number(labourCharge ? labourCharge : 0),
            credit: credit ? credit : 0,
            discountOnTotal: Number(discountOnTotal ? discountOnTotal : 0),
        }

        if (data.total < data.credit)
            return errorNotify('Credit cannot be greater than total!');

        const formData = new FormData();
        formData.append("data", JSON.stringify(data));

        // rtk query called
        createOrder(formData).unwrap()
            .then(response => {
                if (response.success) {
                    successNotify(response.message);
                    setProducts([]);
                    setSelectedCustomer({ _id: 1, label: "Select", value: "" });
                    setSelectedEmployee({ _id: 1, label: "Select", value: "" });
                    setSelectedDate(new Date().toISOString().split('T')[0]);
                    setCredit(0);
                    router.push(`${ORDER_LINKS.VIEW_ORDER_SUB}/${response?.data?._id}`)
                }
            })
            .catch(error => {
                errorNotify(error?.data?.message);
            });
    }

    return (
        <>
            <div>
                <PrimaryButton
                    text='Make Order'
                    css="absolute right-4 top-1/3 z-10 w-[100px]"
                    onClick={handleOrder}
                    isLoading={isLoading}
                />
            </div>

            <SelectDetails
                selectedEmployee={selectedEmployee}
                setSelectedEmployee={setSelectedEmployee}
                selectedCustomer={selectedCustomer}
                setSelectedCustomer={setSelectedCustomer}
                setSelectedDate={setSelectedDate}
                selectedDate={selectedDate}
                credit={credit}
                setCredit={setCredit}
                labourCharge={labourCharge}
                setLabourCharge={setLabourCharge}
                discountOnTotal={discountOnTotal}
                setDiscountOnTotal={setDiscountOnTotal}
            />

            <POS
                products={products}
                setProducts={setProducts}
                selectedDiscountType={selectedDiscountType}
                setSelectedDiscountType={setSelectedDiscountType}
            />

            <CardLayout isNotInitalized title="Products">
                <ProductPOSTable
                    products={products}
                    subTotal={calculateSubTotal()}
                    labourCharge={labourCharge}
                    total={(calculateSubTotal() + Number(labourCharge ? labourCharge : 0) - Number(discountOnTotal ? discountOnTotal : 0))}
                    discountOnTotal={discountOnTotal}
                    credit={credit ? credit : 0}
                />
            </CardLayout>
        </>
    );
};

export default CreateOrder;