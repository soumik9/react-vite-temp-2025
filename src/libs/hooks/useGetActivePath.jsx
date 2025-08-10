import { useEffect } from "react";
import { useLocation } from "react-router";
import { setActiveGlobalSidebar } from "@src/redux";
import { useDispatch, useSelector } from "react-redux";
import { AdminPathEnum, DashboardPathEnum, ProductPathEnum, SettingPathEnum } from "../enum";

export const useGetActivePath = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const { activePath, subActivePath, isDropdownOpen } = useSelector((state) => state.global);

    useEffect(() => {
        if (location?.pathname?.includes(AdminPathEnum.path)) {
            dispatch(setActiveGlobalSidebar({
                activePath: AdminPathEnum.activePath, subActivePath: "", isDropdownOpen: ""
            }));
        } else if (location?.pathname?.includes(ProductPathEnum.path)) {
            dispatch(setActiveGlobalSidebar({
                activePath: ProductPathEnum.activePath, subActivePath: "", isDropdownOpen: ""
            }));
        } else if (location?.pathname?.includes(SettingPathEnum.path)) {
            dispatch(setActiveGlobalSidebar({
                activePath: SettingPathEnum.activePath, subActivePath: "", isDropdownOpen: ""
            }));
        } else {
            dispatch(setActiveGlobalSidebar({
                activePath: DashboardPathEnum.activePath, subActivePath: "", isDropdownOpen: ""
            }));
        }
    }, [dispatch, location?.pathname]);

    return { activePath, subActivePath, isDropdownOpen };
}