import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiUserStarLine, RiUserSettingsLine } from "react-icons/ri";
import { TbHttpPost } from "react-icons/tb";
import { CUSTOMER_LINKS, DASHBOARD_LINKS, DEMO_LINKS, EMPLOYEE_LINKS, ORDER_LINKS, USER_LINKS } from "../enum/link";
import { cx } from "../hooks/helper";

// *dashboard layouts
export const dashboardLayoutUrls = [
    ...Object.values(DASHBOARD_LINKS),
    ...Object.values(USER_LINKS),
    ...Object.values(DEMO_LINKS),
    ...Object.values(CUSTOMER_LINKS),
    ...Object.values(EMPLOYEE_LINKS),
    ...Object.values(ORDER_LINKS),
];

// *dashboard sdebar icon size
export const iconSize = 'lg:text-[24px] text-[20px]'

// *dashboard sidebar menu items
export const dashboardMenuItems = [
    {
        to: DASHBOARD_LINKS.DASHBOARD,
        text: "Dashboard",
        icon: <MdOutlineSpaceDashboard className={cx(iconSize)} />,
        activeLinks: [
            ...Object.values(DASHBOARD_LINKS),
        ]
    },
    {
        to: ORDER_LINKS.ORDER,
        text: "Orders",
        icon: <TbHttpPost className={cx(iconSize)} />,
        activeLinks: [
            ...Object.values(ORDER_LINKS),
        ]
    },
    {
        to: CUSTOMER_LINKS.CUSTOMER,
        text: "Customers",
        icon: <RiUserStarLine className={cx(iconSize)} />,
        activeLinks: [
            ...Object.values(CUSTOMER_LINKS),
        ]
    },
    {
        to: EMPLOYEE_LINKS.EMPLOYEE,
        text: "Employees",
        icon: <RiUserSettingsLine className={cx(iconSize)} />,
        activeLinks: [
            ...Object.values(EMPLOYEE_LINKS),
        ]
    },
];