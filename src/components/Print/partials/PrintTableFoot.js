import React from 'react';
import { cx } from '@/utils/hooks/helper';
import { useSelector } from 'react-redux';

const PrintTableFoot = ({ total, cash, due, subTotal, labourCharge, discountOnTotal }) => {

    // *global
    const { isDark } = useSelector((state) => state.global);

    const commonCellClass = "py-2 px-6 border border-stone-200";
    const commonRowClass = isDark ? "text-white uppercase text-sm leading-normal font-semibold" : "text-lightDark uppercase text-sm leading-normal font-semibold";

    return (
        <tfoot>
            <tr className={commonRowClass}>
                <td className={cx(commonCellClass, "text-left")} colSpan="5">
                    <span className="flex justify-end">Sub-Total</span>
                </td>
                <td className={cx(commonCellClass, "text-center !px-1")} colSpan="2">
                    {subTotal} BDT
                </td>
            </tr>
            <tr className={commonRowClass}>
                <td className={cx(commonCellClass, "text-left")} colSpan="5">
                    <span className="flex justify-end">Labour Charge</span>
                </td>
                <td className={cx(commonCellClass, "text-center !px-1")} colSpan="2">
                    {labourCharge} BDT
                </td>
            </tr>
            <tr className={commonRowClass}>
                <td className={cx(commonCellClass, "text-left")} colSpan="5">
                    <span className="flex justify-end">Discount On Total</span>
                </td>
                <td className={cx(commonCellClass, "text-center !px-1")} colSpan="2">
                    {discountOnTotal} BDT
                </td>
            </tr>

            <tr className={commonRowClass}>
                <td className={cx(commonCellClass, "text-left")} colSpan="5">
                    <span className="flex justify-end">Total</span>
                </td>
                <td className={cx(commonCellClass, "text-center !px-1")} colSpan="2">
                    {total} BDT
                </td>
            </tr>
            <tr className={commonRowClass}>
                <td className={cx(commonCellClass, "text-left")} colSpan="5">
                    <span className="flex justify-end">Cash</span>
                </td>
                <td className={cx(commonCellClass, "text-center !px-1")} colSpan="2">{cash} BDT</td>
            </tr>
            <tr className={commonRowClass}>
                <td className={cx(commonCellClass, "text-left")} colSpan="5">
                    <span className="flex justify-end">Due</span>
                </td>
                <td className={cx(commonCellClass, "text-center !px-1")} colSpan="2">{due} BDT</td>
            </tr>
        </tfoot>
    );
};

export default PrintTableFoot;