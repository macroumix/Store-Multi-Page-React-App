import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ItemsPage, { loadItems as itemLoader } from "./pages/Items";
import CartPage from "./pages/Cart";
import ContactPage from "./pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "items",
        element: <ItemsPage />,
        loader: itemLoader,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
