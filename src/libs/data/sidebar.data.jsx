import { FaHouse, FaUserNinja, FaFutbol, FaGopuram } from "react-icons/fa6";
import { AdminPathEnum, DashboardPathEnum, ProductPathEnum, SettingPathEnum } from "../enum";

// dashboard sidebar menu items
export const sidebarNavData = [
    {
        to: DashboardPathEnum.path,
        text: DashboardPathEnum.title,
        icon: <FaHouse />,
        activePath: DashboardPathEnum.activePath,
        // roles: [RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MODERATOR],
    },
    {
        to: ProductPathEnum.path,
        text: ProductPathEnum.title,
        icon: <FaGopuram />,
        activePath: ProductPathEnum.activePath,
        // roles: [RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MODERATOR],
    },
    {
        to: AdminPathEnum.path,
        text: AdminPathEnum.title,
        icon: <FaUserNinja />,
        activePath: AdminPathEnum.activePath,
        // roles: [RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN],
    },

    // settings
    {
        to: SettingPathEnum.path,
        text: SettingPathEnum.title,
        icon: <FaFutbol />,
        activePath: SettingPathEnum.activePath,
        // roles: [RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MODERATOR],
    },
];
