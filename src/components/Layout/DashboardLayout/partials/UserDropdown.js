import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { cx } from '@/utils/hooks/helper';
import { useDispatch, useSelector } from 'react-redux';
import { infoNotify } from '@/utils/hooks/notify';
import { userLoggedOut } from '@/redux-rtk/features/auth/authSlice';

const UserDropdown = ({ showAVDropdown, setShowAVDropdown, user }) => {

    // *global
    const router = useRouter();
    const dispatch = useDispatch();
    const { global, auth } = useSelector((state) => state);

    // *dropdown close to detect click outside
    const closeDropdown = () => setShowAVDropdown(false);
    const ref = useDetectClickOutside({ onTriggered: closeDropdown });

    // *logout function
    const handleLogout = (e) => {
        e.preventDefault();
        setShowAVDropdown(false);
        router.push('/login');
        dispatch(userLoggedOut());
        infoNotify('Logout Success!');
    }

    return (
        <div className="relative">

            <div className="flex gap-2.5 items-center group" ref={ref}>
                <Image
                    alt=""
                    width={32}
                    height={32}
                    className="rounded-full object-cover w-8 h-8 cursor-pointer"
                    src="/global/demo-user.png"
                    onClick={() => setShowAVDropdown(!showAVDropdown)}
                />

                {/* showing the logged user name */}
                <span
                    className={cx(
                        global.isDark ? "text-gray-300 group-hover:text-gray-200" : "text-gray-500 group-hover:text-gray-700",
                        "trans cursor-pointer font-medium font-secondary"
                    )}
                    onClick={() => setShowAVDropdown(!showAVDropdown)}
                >
                    {auth.user?.name.split(' ')[0]}
                </span>

                {/* based on open dropdown show icon */}
                {showAVDropdown ? <BsChevronUp
                    className={cx(
                        global.isDark ? "text-gray-300 group-hover:text-gray-200" : "text-gray-500 group-hover:text-gray-700",
                        "trans cursor-pointer"
                    )}
                    onClick={() => setShowAVDropdown(!showAVDropdown)}
                /> : <BsChevronDown
                    className={cx(
                        global.isDark ? "text-gray-300 group-hover:text-gray-200" : "text-gray-500 group-hover:text-gray-700",
                        "trans cursor-pointer"
                    )}
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowAVDropdown(true);
                    }}
                />}
            </div>

            <div
                id="avDropdown"
                className={cx(
                    showAVDropdown ? "block" : "hidden",
                    global.isDark ? "bg-lightDark" : "bg-white",
                    "absolute z-50 mt-2 rounded-md shadow-lg w-48 right-0 py-1 "
                )}
            >
                <div className={cx(
                    global.isDark ? "bg-lightDark text-gray-300" : "bg-white text-gray-400",
                    "px-4 py-2 text-xs  cursor-default"
                )}>
                    {auth.user?.name?.split(' ')[0]}`s
                    {' '}Account
                </div>

                <ul className="mt-2">
                    {/* <li>
                        <Link
                            href="#"
                            onClick={() => setShowAVDropdown(false)}
                            className={cx(
                                global.isDark ? "text-gray-200 hover:text-gray-100 hover:bg-electroMagnetic" : "text-gray-500 hover:text-gray-600 hover:bg-gray-100",
                                "block px-4 py-2 text-sm leading-5 trans"
                            )}
                        >
                            My Profile
                        </Link>
                    </li> */}

                    <li className={cx(
                        global.isDark ? "border-gray-500" : "border-gray-100",
                        "border-t"
                    )}></li>

                    <li>
                        <button
                            onClick={handleLogout}
                            className={cx(
                                global.isDark ? "text-gray-200 hover:text-gray-100 hover:bg-electroMagnetic" : "text-gray-500 hover:text-gray-600 hover:bg-gray-100",
                                "block px-4 py-2 text-sm leading-5 trans w-full text-start"
                            )}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserDropdown