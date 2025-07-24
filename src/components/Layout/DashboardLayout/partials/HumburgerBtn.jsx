import { cn } from '@src/libs/hooks';
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
                <AiOutlineClose className={cn(
                    isDark ? " hover:text-secondary" : "text-primary hover:text-secondary",
                    toggleIconCmnCls
                )} /> :
                <AiOutlineUnorderedList className={cn(
                    isDark ? " hover:text-secondary" : "text-primary hover:text-secondary",
                    toggleIconCmnCls
                )} />}
        </button>
    )
}

export default HumburgerBtn