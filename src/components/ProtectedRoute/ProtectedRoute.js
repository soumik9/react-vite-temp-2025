import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useSelector((state) => state.auth);
    const router = useRouter();

    if (!isAuthenticated) {
        router.push('/login')
    }

    return children;
}

export default ProtectedRoute;