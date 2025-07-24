import { cx } from '@/utils/hooks/helper';
import React from 'react';
import { useSelector } from 'react-redux';

const commonCellClass = "border-t-0 px-6 border border-stone-200 whitespace-nowrap px-4 py-2";

const PrintTableBody = ({ products }) => {

    // *global
    const { isDark } = useSelector((state) => state.global);

    return (
        <tbody>
            {products.map(({ name, unitPrice, quantity, total, discount, unitPriceAfterDiscount }, index) => (
                <tr className={cx(
                    isDark ? "text-white" : "text-lightDark",
                    "font-normal text-xs"
                )} key={index}>
                    <th className={cx(commonCellClass, "text-left")}>
                        {name}
                    </th>
                    <td className={cx(commonCellClass, "text-center")}>
                        {unitPrice} BDT
                    </td>
                    <td className={cx(commonCellClass, "text-center")}>
                        {quantity} PC
                    </td>
                    <td className={cx(commonCellClass, "text-center")}>
                        {discount.amount} {discount.type === 'taka' ? 'BDT' : '%'}
                    </td>
                    <td className={cx(commonCellClass, "text-center")}>
                        {unitPriceAfterDiscount} BDT
                    </td>
                    <td className={cx(commonCellClass, "text-center")}>
                        {total} BDT
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default PrintTableBody;