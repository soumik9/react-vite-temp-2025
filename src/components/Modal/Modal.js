import { cx } from '@/utils/hooks/helper';
import React from 'react';
import { useSelector } from 'react-redux';

const Modal = ({ id, children, title = 'Modal' }) => {

    // *global
    const { isDark } = useSelector((state) => state.global);

    return (
        <dialog id={id} className="modal modal-bottom sm:modal-middle">
            <div className={cx(
                isDark ? "" : "bg-white text-lightDark",
                "modal-box"
            )}>
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <>
                    <h3 className="font-bold text-lg ">{title}</h3>
                    <div className="divider"></div>

                    <div className='pb-4'>
                        {children}
                    </div>
                </>
            </div>
        </dialog >
    );
};

export default Modal;