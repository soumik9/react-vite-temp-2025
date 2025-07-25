import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/login')
    }

    return children;
}

export default ProtectedRoute;