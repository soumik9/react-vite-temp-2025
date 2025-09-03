import { cn } from '@src/libs/helper';
import { useNavigate } from 'react-router';
import { imageStaticPath } from '@src/assets';
import React, { useEffect, useRef } from 'react'
import { toggleProfileDropdown } from '@src/redux';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const ProfileDropdown = () => {

    // global
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { isDark, isProfileDropdownOpen } = useSelector((state) => state.global);

    const ref = useRef(null);
    const handleToggleProfileDropdown = (payload) => dispatch(toggleProfileDropdown(payload));

    useEffect(() => {
        if (!isProfileDropdownOpen) return;
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handleToggleProfileDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isProfileDropdownOpen]);

    // logout function
    const handleLogout = (e) => {
        e.preventDefault();
        handleToggleProfileDropdown(false);
        // navigate('/login');
        // dispatch(userLoggedOut());
        infoNotify('Logout Success!');
    }

    return (
        <div className="relative">
            <div className="flex gap-2.5 items-center group" ref={ref}>
                <img
                    alt=""
                    width={32}
                    height={32}
                    className="rounded-full object-cover w-8 h-8 cursor-pointer border-1 border-primary"
                    src={imageStaticPath.avatar}
                    onClick={() => handleToggleProfileDropdown(!isProfileDropdownOpen)}
                />

                {/* showing the logged user name */}
                <span
                    className={cn(
                        isDark ? "text-gray-300 group-hover:text-gray-200" : "text-primary group-hover:text-gray-900",
                        "trans cursor-pointer font-medium font-secondary"
                    )}
                    onClick={() => handleToggleProfileDropdown(!isProfileDropdownOpen)}
                >
                    {user?.fullName || "Soumik"}
                </span>

                {/* based on open dropdown show icon */}
                {isProfileDropdownOpen ? <BsChevronUp
                    className={cn(
                        isDark ? "text-gray-300 group-hover:text-gray-200" : "text-primary group-hover:text-gray-900",
                        "trans cursor-pointer"
                    )}
                    onClick={() => handleToggleProfileDropdown(!isProfileDropdownOpen)}
                /> : <BsChevronDown
                    className={cn(
                        isDark ? "text-gray-300 group-hover:text-gray-200" : "text-primary group-hover:text-gray-900",
                        "trans cursor-pointer"
                    )}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleToggleProfileDropdown(true);
                    }}
                />}
            </div>

            <div
                id="avDropdown"
                className={cn(
                    isProfileDropdownOpen ? "block" : "hidden",
                    isDark ? "bg-lightDark" : "bg-white",
                    "absolute z-50 mt-2 rounded-md shadow-lg w-48 right-0 py-1 "
                )}
            >
                <div className={cn(
                    isDark ? "bg-lightDark text-gray-300" : "bg-white text-gray-400",
                    "px-4 py-2 text-xs  cursor-default"
                )}>
                    {user?.fullName?.split(' ')[0] || "Soumik"}'s
                    {' '}Account
                </div>

                <ul className="mt-2">
                    {/* <li>
                        <Link
                            href="#"
                            onClick={() => setShowAVDropdown(false)}
                            className={cx(
                                isDark ? "text-gray-200 hover:text-gray-100 hover:bg-electroMagnetic" : "text-gray-500 hover:text-gray-600 hover:bg-gray-100",
                                "block px-4 py-2 text-sm leading-5 trans"
                            )}
                        >
                            My Profile
                        </Link>
                    </li> */}

                    <li className={cn(
                        isDark ? "border-gray-500" : "border-gray-100",
                        "border-t"
                    )}></li>

                    <li>
                        <button
                            onClick={handleLogout}
                            className={cn(
                                isDark ? "text-gray-200 hover:text-gray-100 hover:bg-electroMagnetic" : "text-gray-500 hover:text-gray-600 hover:bg-gray-100",
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

export default ProfileDropdown