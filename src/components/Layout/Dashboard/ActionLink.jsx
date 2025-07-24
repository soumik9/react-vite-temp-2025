import { ENUM_ACTION_TITLE } from '@src/libs/enum/enum';
import { cn } from '@src/libs/hooks';
import React from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { IoCogOutline } from 'react-icons/io5';
import { MdAccountBox } from 'react-icons/md';
import { Link } from 'react-router';

export const actionBtnClass = 'text-[22px] p-1.5 rounded-lg text-white cursor-pointer trans'
export const actionBtnIconClass = 'cursor-pointer'

const ActionLink = ({ href, type }) => {
    return (
        <Link
            to={href}
            className={cn(
                actionBtnClass,
                type === ENUM_ACTION_TITLE.ACCOUNT ? 'bg-primary hover:bg-secondary' : '',
                type === ENUM_ACTION_TITLE.VIEW ? 'bg-livid hover:bg-secondary' : '',
                type === ENUM_ACTION_TITLE.UPDATE ? 'bg-warning hover:bg-warning-hover' : '',
            )}
        >

            {/* account icon */}
            {type === ENUM_ACTION_TITLE.ACCOUNT ? <MdAccountBox
                className={cn(actionBtnIconClass)}
            /> : ''}

            {/* view icon */}
            {type === ENUM_ACTION_TITLE.VIEW ? <AiOutlineEye
                className={cn(actionBtnIconClass)}
            /> : ''}

            {/* update icon */}
            {type === ENUM_ACTION_TITLE.UPDATE ? <IoCogOutline
                className={cn(actionBtnIconClass)}
            /> : ''}

        </Link>
    )
}

export default ActionLink