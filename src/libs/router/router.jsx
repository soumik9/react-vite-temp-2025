
import { HomePage } from "@src/pages";
import { createBrowserRouter, RouterProvider } from "react-router";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    // Add more routes as needed
]);

const Router = () => <RouterProvider router={routes} />;

export default Router;