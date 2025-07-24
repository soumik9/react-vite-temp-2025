import React from 'react'
import { IoTrash } from 'react-icons/io5';
import { ENUM_ACTION_TITLE } from '@/utils/enum/enum';
import { cx } from '@/utils/hooks/helper';
import { actionBtnClass, actionBtnIconClass } from './ActionLink';

const ActionButton = ({ itype, ...props }) => {
    return (
        <button
            className={cx(
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
                className={cx(actionBtnIconClass)}
            /> : ''}
        </button>
    )
}

export default ActionButton