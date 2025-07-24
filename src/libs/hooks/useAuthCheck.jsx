import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
import { userLoggedIn, userLoggedOut } from "@src/redux-rtk/features/auth/authSlice";

export const useAuthCheck = () => {

    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {

        const accessToken = Cookies.get('accessToken');
        const user = Cookies.get('user');

        if (accessToken && Object.keys(user).length > 0) {

            // token decode & check is token expired
            const currentTimestamp = moment().unix();
            const decoded = jwtDecode(accessToken);
            const checkExpire = currentTimestamp < decoded.exp;

            if (decoded._id) {
                if (checkExpire) {
                    dispatch(userLoggedIn({ accessToken, user: JSON.parse(user) }));
                } else {
                    dispatch(userLoggedOut());
                    errorNotify("Session has been expired");
                }
            } else {
                dispatch(userLoggedOut());
            }
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]);
    return authChecked;
}