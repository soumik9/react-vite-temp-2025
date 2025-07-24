import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import { useGetOrderQuery } from '@/redux-rtk/features/order/orderApi';
import React, { useRef } from 'react';
import PrintTable from '@/components/Print/PrintTable';
import InvoiceDetails from '@/components/Print/InvoiceDetails';
import InvoiceThanks from '@/components/Print/InvoiceThanks';
import PrimaryButton from '@/components/Button/PrimaryButton';
import { useReactToPrint } from 'react-to-print';

const ViewOrder = ({ orderId }) => {

    // *redux api call to get all users
    const { data: order, isLoading, isError, isSuccess } = useGetOrderQuery(orderId);

    // Ref to the invoice section
    const componentRef = useRef();

    // Handler for printing
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <CardLayout isLoading={isLoading} isError={isError} isSuccess={isSuccess} title={order?.data?.orderId}>

            <PrimaryButton
                onClick={handlePrint}
                text="Print"
                css="absolute top-1/2 right-4 w-[100px]"
            />

            <div className="my-6 px-4 text-lightDark " id="invoice" ref={componentRef}>

                <InvoiceDetails
                    order={order?.data}
                    customer={order?.data?.customer}
                    reference={order?.data?.reference}
                />

                {/* <div className='block w-full overflow-x-auto'> */}
                <PrintTable
                    products={order?.data?.products}
                    total={order?.data?.total}
                    credit={order?.data?.credit}
                    subTotal={order?.data?.subTotal || order?.data?.total}
                    labourCharge={order?.data?.labourCharge || 0}
                    discountOnTotal={order?.data?.discountOnTotal || 0}
                />
                {/* </div> */}

                <InvoiceThanks />
            </div>
        </CardLayout>
    );
};

export default ViewOrder;