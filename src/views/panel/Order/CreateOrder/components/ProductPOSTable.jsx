import React from 'react';
import PrintTable from '@/components/Print/PrintTable';

const ProductPOSTable = ({ products, credit, subTotal, labourCharge = 0, total, discountOnTotal = 0 }) => {

    if (products.length === 0) return <p className='text-red-500 h-[164px] flex justify-center items-center'>
        Please insert product
    </p>

    return (
        <div className="block w-full overflow-x-auto">
            <PrintTable
                products={products}
                total={total}
                credit={credit}
                subTotal={subTotal}
                labourCharge={labourCharge}
                discountOnTotal={discountOnTotal}
            />
        </div>
    );
};

export default ProductPOSTable;