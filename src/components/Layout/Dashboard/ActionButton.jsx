import React from 'react'
import { IoTrash } from 'react-icons/io5';
import { actionBtnClass, actionBtnIconClass } from './ActionLink';
import { ENUM_ACTION_TITLE } from '@src/libs/enum/enum';
import { cn } from '@src/libs/hooks';

const ActionButton = ({ itype, ...props }) => {
    return (
        <button
            className={cn(
                actionBtnClass,
                itype === ENUM_ACTION_TITLE.ACCOUNT ? 'bg-primary hover:bg-primary-600' : '',
                itype === ENUM_ACTION_TITLE.VIEW ? 'bg-secondary-400 hover:bg-secondary-600' : '',
                itype === ENUM_ACTION_TITLE.UPDATE ? 'bg-warning hover:bg-warning-hover' : '',
                itype === ENUM_ACTION_TITLE.DELETE ? 'bg-error hover:bg-error-hover' : '',

            )}
            {...props}
        >
            {/* delete icon */}
            {itype === ENUM_ACTION_TITLE.DELETE ? <IoTrash
                className={cn(actionBtnIconClass)}
            /> : ''}
        </button>
    )
}

export default ActionButton