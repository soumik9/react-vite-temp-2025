
import { LoginPathEnum } from "../enum";
import ProtectedRoute from "./ProtectedRoute";
import { DashboardLayout } from "@src/components";
import { AdminPage, DashboardPage, HomePage } from "@src/pages";
import { createBrowserRouter, RouterProvider } from "react-router";

const routes = createBrowserRouter([
    {
        path: LoginPathEnum.path,
        element: <HomePage />,
    },
    {
        path: '/panel',
        element:
            // <ProtectedRoute>
            <DashboardLayout />,
        // </ProtectedRoute>,
        children: [
            {
                path: 'dashboard',
                element: <DashboardPage />,
            },
            {
                path: 'admin',
                element: <AdminPage />,
            },
            // {
            //     path: 'customer',
            //     children: [
            //         {
            //             index: true,
            //             element: <CustomerPage />,
            //         },
            //         {
            //             path: 'add',
            //             element: <AddCustomerPage />,
            //         },
            //         {
            //             path: 'update/:customerId',
            //             element: <CustomerUpdatePage />,
            //         },
            //         {
            //             path: 'account/:customerId',
            //             element: <CustomerAccountPage />,
            //         },
            //         {
            //             path: 'view/:customerId',
            //             element: <CustomerViewPage />,
            //         },
            //     ],
            // },
        ],
    },
]);

const Router = () => <RouterProvider router={routes} />;

export default Router;