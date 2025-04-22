import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";
import ModifyProductPage from "../pages/ModifyProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <ProductPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/modify-product/:id",
        element: <ModifyProductPage />,
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
