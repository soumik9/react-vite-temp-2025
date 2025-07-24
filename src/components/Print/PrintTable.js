import React from 'react';
import PrintTableHead from './partials/PrintTableHead';
import PrintTableBody from './partials/PrintTableBody';
import PrintTableFoot from './partials/PrintTableFoot';
import { orderTableColums } from '@/utils/constant/data';

const PrintTable = ({ products, total, credit, subTotal, labourCharge, discountOnTotal }) => {
    return (
        <table className="items-center bg-transparent w-full border-collapse mt-8">
            <PrintTableHead
                columns={orderTableColums}
            />

            <PrintTableBody
                products={products}
            />

            <PrintTableFoot
                subTotal={subTotal}
                labourCharge={labourCharge}
                total={total}
                cash={credit}
                due={total - credit}
                discountOnTotal={discountOnTotal}
            />
        </table>
    );
};

export default PrintTable;