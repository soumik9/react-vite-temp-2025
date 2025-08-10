
import { createBrowserRouter, RouterProvider } from "react-router";
import { DashboardLayout } from "@src/components";
import ProtectedRoute from "./ProtectedRoute";
import { DashboardPage, HomePage } from "@src/pages";
import { LoginPathEnum } from "../enum";

const routes = createBrowserRouter([
    {
        path: LoginPathEnum.path,
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