import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LoginPathEnum } from "../enum";

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        navigate(LoginPathEnum.path)
    }

    return children;
}

export default ProtectedRoute;