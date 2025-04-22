import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";
import ModifyProductPage from "../pages/ModifyProductPage";
import ModifyUserPage from "../pages/ModifyUserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/users",
        element: <ProductPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/users/:id",
        element: <ModifyUserPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/products",
        element: <ProductPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/products/:id",
        element: <ModifyProductPage />,
        errorElement: <ErrorPage />,
    }
]);

export default router;