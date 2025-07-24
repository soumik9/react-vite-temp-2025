import PrimaryButton from '@/components/Button/PrimaryButton';
import Input from '@/components/Froms/Input';
import SelectCustom from '@/components/Froms/SelectCustom';
import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import { discountOptions } from '@/utils/constant/data';
import { calculateUnitPriceAfterDiscount } from '@/utils/hooks/helper';
import { errorNotify } from '@/utils/hooks/notify';
import React from 'react';

const POS = ({ products, setProducts, selectedDiscountType, setSelectedDiscountType }) => {

    const handleAddProduct = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = {
            name: e.target.name.value,
            unitPrice: parseFloat(e.target.price.value),
            quantity: parseInt(e.target.quantity.value),
            discount: {
                type: selectedDiscountType.value,
                amount: parseFloat(e.target.discountAmount.value || 0),
            }
        }

        data.unitPriceAfterDiscount = calculateUnitPriceAfterDiscount(data.unitPrice, data.discount.type, data.discount.amount);
        data.total = data.quantity * data.unitPriceAfterDiscount;

        if (!data.name || !data.unitPrice || !data.quantity)
            return errorNotify('Fields are requried');

        setProducts([...products, data]);
        form.reset();
    }

    return (
        <CardLayout isNotInitalized>
            <form onSubmit={handleAddProduct} className='grid md:grid-cols-2 xll:grid-cols-3 gap-y-3 gap-x-6 items-end'>
                <Input
                    label="Product Name"
                    id="name"
                    divCss='md:col-span-2 xll:col-span-1'
                />
                <Input
                    label="Product Price"
                    id="price"
                    type='number'
                    min={0}
                />

                <Input
                    label="Quantity"
                    id="quantity"
                    type='number'
                    min={0}
                />

                <SelectCustom
                    label="Select Discount"
                    options={discountOptions}
                    value={selectedDiscountType}
                    onChange={setSelectedDiscountType}
                />

                <Input
                    label="Discount Amount"
                    id="discountAmount"
                    type='number'
                    min={0}
                />

                <div className='flex justify-center'>
                    <PrimaryButton
                        text="Add Product"
                        css="md:!w-[200px]"
                    />
                </div>
            </form>
        </CardLayout>
    );
};

export default POS;