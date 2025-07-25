import { DashboardLayout } from "@src/components/Layout";
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
        element: <DashboardLayout />,
        children: [
            {
                path: 'dashboard',
                element: <DashboardPage />,
            },
            {
                path: 'customer',
                element: <CustomerPage />,
            },
        ],
    },
]);

const Router = () => <RouterProvider router={routes} />;

export default Router;