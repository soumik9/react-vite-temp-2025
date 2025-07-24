import { CustomerPage, DashboardPage, HomePage } from "@src/pages";
import { createBrowserRouter, RouterProvider } from "react-router";

const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/panel',
        element: <PanelLayout />,
        children: [
            {
                path: 'dashboard',
                element: <DashboardPage />,
            },
            {
                path: 'user',
                element: <CustomerPage />,
            },
        ],
    },
]);

const Router = () => <RouterProvider router={routes} />;

export default Router;