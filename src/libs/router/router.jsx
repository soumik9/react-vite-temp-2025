
import { HomePage } from "@src/pages";
import { createBrowserRouter, RouterProvider } from "react-router";
import { LoginPathEnum } from "../enum";

const routes = createBrowserRouter([
    {
        path: LoginPathEnum.path,
        element: <HomePage />,
    },
    // Add more routes as needed
]);

const Router = () => <RouterProvider router={routes} />;

export default Router;