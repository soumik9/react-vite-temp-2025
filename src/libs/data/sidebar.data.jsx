import { AdminPathEnum, DashboardPathEnum, ProductPathEnum, SettingPathEnum } from "../enum";

// dashboard sidebar menu items
export const sidebarNavData = [
    {
        to: DashboardPathEnum.path,
        text: DashboardPathEnum.title,
        icon: <DashboardSvg />,
        activePath: DashboardPathEnum.activePath,
        // roles: [RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MODERATOR],
    },
    {
        to: ProductPathEnum.path,
        text: ProductPathEnum.title,
        icon: <TodaySaleSvg />,
        activePath: ProductPathEnum.activePath,
        // roles: [RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MODERATOR],
    },
    {
        to: AdminPathEnum.path,
        text: AdminPathEnum.title,
        icon: <UserSvg />,
        activePath: AdminPathEnum.activePath,
        // roles: [RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN],
    },

    // settings
    {
        to: SettingPathEnum.path,
        text: SettingPathEnum.title,
        icon: <SettingsSvg />,
        activePath: SettingPathEnum.activePath,
        // roles: [RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.MODERATOR],
    },
];
