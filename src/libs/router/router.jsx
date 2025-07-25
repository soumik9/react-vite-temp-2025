import { DashboardLayout } from "@src/components/Layout";
import ProtectedRoute from "@src/components/ProtectedRoute/ProtectedRoute";
import { CustomerPage, DashboardPage, HomePage, LoginPage } from "@src/pages";
import { createBrowserRouter, RouterProvider } from "react-router";

const routes = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/panel',
        element: <ProtectedRoute>
            <DashboardLayout />
        </ProtectedRoute>,
        children: [
            {
                path: 'dashboard',
                element: <DashboardPage />,
            },
            {
                path: 'customer',
                // element: <></>,
                children: [
                    {
                        index: true,
                        element: <CustomerPage />,
                    },
                ],
            },
        ],
    },
]);

const Router = () => <RouterProvider router={routes} />;

export default Router;