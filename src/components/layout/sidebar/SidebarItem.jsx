import { Link } from 'react-router';
import { cn } from '@src/libs/helper';
import { setActivePath } from '@src/redux';
import { useGetActivePath } from '@src/libs/hooks';
import { useDispatch, useSelector } from 'react-redux';

const SidebarItem = ({ menu }) => {

    const dispatch = useDispatch();
    const { isDark, isSidebarOpen } = useSelector((state) => state.global);
    const { activePath, subActivePath, isSidebarItemDropdownOpen } = useGetActivePath();

    return (
        <li>
            <Link
                to={menu.to}
                className={cn(
                    isDark ? 'text-gray-300' : 'text-white',
                    'font-medium flex items-center gap-x-2.5 cursor-pointer px-2.5 py-3 hover:bg-livid transition_common rounded-md text-base',
                    (activePath === menu.activePath && isDark) ? 'bg-blueNight' : '',
                    (activePath === menu.activePath && !isDark) ? 'bg-secondary' : '',
                )}
                onClick={() => {
                    dispatch(setActivePath(menu.activePath));
                }}
                draggable={false}
            >
                {menu?.icon({ className: 'w-5 h-5' })}

                <span className={cn(
                    !isSidebarOpen && 'hidden',
                    'origin-left duration-300 text-lg tracking-wide'
                )}>
                    {menu?.text}
                </span>
            </Link>
        </li>
    );
};

export default SidebarItem;