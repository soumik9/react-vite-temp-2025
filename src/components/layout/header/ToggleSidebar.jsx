import { useEffect } from 'react';
import { cn } from '@src/libs/helper';
import { toggleSidebarMenu } from '@src/redux';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose, AiOutlineUnorderedList } from 'react-icons/ai';

const ToggleSidebar = () => {

    const dispatch = useDispatch();
    const { isSidebarOpen, isDark } = useSelector((state) => state.global);

    // Add event listener for window resize
    useEffect(() => {
        const handleResize = () => dispatch(toggleSidebarMenu(window.innerWidth >= 1024));
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <button className="sb-button"
            onClick={() => dispatch(toggleSidebarMenu(!isSidebarOpen))}
        >
            {isSidebarOpen ?
                <AiOutlineClose className={cn(
                    isDark ? " hover:text-secondary" : "text-primary hover:text-secondary",
                    "transition_common lg:text-2xl text-xl"
                )} /> :
                <AiOutlineUnorderedList className={cn(
                    isDark ? " hover:text-secondary" : "text-primary hover:text-secondary",
                    "transition_common lg:text-2xl text-xl"
                )} />}
        </button>
    );
};

export default ToggleSidebar;