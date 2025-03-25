import HomePage from "@src/pages/Home/HomePage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    // Add more routes as needed
]);