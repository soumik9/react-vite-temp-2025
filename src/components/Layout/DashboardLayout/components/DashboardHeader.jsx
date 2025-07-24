import { useState } from "react";
import { useSelector } from "react-redux";
import { TbHttpPost } from "react-icons/tb";
import { cn } from "@src/libs/hooks";
import { Link } from "react-router";
import { ORDER_LINKS } from "@src/libs/enum/link";
import HumburgerBtn from "../partials/HumburgerBtn";
import { ThemeController, UserDropdown } from "../partials";

const DashboardHeader = ({ open, setOpen }) => {

    // *global
    const global = useSelector((state) => state.global);

    // *states
    const [showAVDropdown, setShowAVDropdown] = useState(false);

    return (
        <div className={cn(
            global.isDark ? "bg-blueNight border-b" : "bg-slate-300",
            "py-5 w-full flex justify-between items-center px-8",
        )}>

            { /* *Note This is a note about this section */}
            <HumburgerBtn
                open={open}
                setOpen={setOpen}
                isDark={global.isDark}
            />

            <div className="flex items-center gap-x-4 lg:gap-x-10">

                <Link to={ORDER_LINKS.CREATE_ORDER}>
                    <TbHttpPost className={cn(
                        "text-4xl text-livid relative top-[2px] trans",
                        global.isDark ? 'hover:text-secondary' : 'hover:text-primary',
                    )} />
                </Link>


                <ThemeController />

                <UserDropdown
                    showAVDropdown={showAVDropdown}
                    setShowAVDropdown={setShowAVDropdown}
                />
            </div>
        </div>
    )
}

export default DashboardHeader