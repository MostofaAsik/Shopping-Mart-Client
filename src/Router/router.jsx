import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h2>Error page</h2>
    },
]);

export default router