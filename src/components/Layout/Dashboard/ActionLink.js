import { ENUM_ACTION_TITLE } from '@/utils/enum/enum';
import { cx } from '@/utils/hooks/helper';
import Link from 'next/link'
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { IoCogOutline } from 'react-icons/io5';
import { MdAccountBox } from 'react-icons/md';

export const actionBtnClass = 'text-[22px] p-1.5 rounded-lg text-white cursor-pointer trans'
export const actionBtnIconClass = 'cursor-pointer'

const ActionLink = ({ href, type }) => {
    return (
        <Link
            href={href}
            className={cx(
                actionBtnClass,
                type === ENUM_ACTION_TITLE.ACCOUNT ? 'bg-primary hover:bg-secondary' : '',
                type === ENUM_ACTION_TITLE.VIEW ? 'bg-livid hover:bg-secondary' : '',
                type === ENUM_ACTION_TITLE.UPDATE ? 'bg-warning hover:bg-warning-hover' : '',
            )}
        >

            {/* account icon */}
            {type === ENUM_ACTION_TITLE.ACCOUNT ? <MdAccountBox
                className={cx(actionBtnIconClass)}
            /> : ''}

            {/* view icon */}
            {type === ENUM_ACTION_TITLE.VIEW ? <AiOutlineEye
                className={cx(actionBtnIconClass)}
            /> : ''}

            {/* update icon */}
            {type === ENUM_ACTION_TITLE.UPDATE ? <IoCogOutline
                className={cx(actionBtnIconClass)}
            /> : ''}

        </Link>
    )
}

export default ActionLink