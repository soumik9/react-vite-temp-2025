import { cx } from '@/utils/hooks/helper';
import React from 'react'
import { AiOutlineClose, AiOutlineUnorderedList } from 'react-icons/ai';

const HumburgerBtn = ({ setOpen, open, isDark }) => {

    // *common class
    const toggleIconCmnCls = 'trans lg:text-[24px] text-[20px]'

    return (
        <button className="sb-button"
            onClick={() => setOpen(!open)}
        >
            {open ?
                <AiOutlineClose className={cx(
                    isDark ? " hover:text-secondary" : "text-primary hover:text-secondary",
                    toggleIconCmnCls
                )} /> :
                <AiOutlineUnorderedList className={cx(
                    isDark ? " hover:text-secondary" : "text-primary hover:text-secondary",
                    toggleIconCmnCls
                )} />}
        </button>
    )
}

export default HumburgerBtn