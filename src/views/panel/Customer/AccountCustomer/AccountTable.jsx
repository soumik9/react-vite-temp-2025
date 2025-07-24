import { cx, getStringTimestamp } from '@/utils/hooks/helper';
import React from 'react';
import { useSelector } from 'react-redux';

const commonCellClass = "border-t-0 px-6 border border-stone-200 whitespace-nowrap px-4 py-2";

const AccountTable = ({ transactions }) => {

    // *global
    const { isDark } = useSelector((state) => state.global);

    return (
        <tbody>
            {transactions.map((transaction, index) => (
                <tr className={cx(
                    isDark ? "text-white" : "text-lightDark",
                    "font-normal text-xs"
                )} key={index}>
                    <th className={cx(commonCellClass, "text-left font-normal")}>
                        {getStringTimestamp(transaction?.createdAt)}
                    </th>
                    <td className={cx(commonCellClass, "text-center")}>
                        {transaction?.credit ? transaction?.credit : 0} BDT
                    </td>
                    <td className={cx(commonCellClass, "text-center")}>
                        {transaction?.debit ? transaction?.debit : 0} BDT
                    </td>
                    <td className={cx(commonCellClass, "text-center")}>
                        {transaction?.return ? transaction?.return : 0} BDT
                    </td>
                    <td className={cx(commonCellClass, "text-center")}>
                        {transaction?.type}
                    </td>
                    <td className={cx(commonCellClass, "text-center")}>
                        {transaction?.balance < 0 ? Math.abs(transaction.balance) : -transaction.balance} BDT
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default AccountTable;