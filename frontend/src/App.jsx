import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Shops } from "./pages/shops/shops";
import { Cart } from "./pages/cart/cart";
import { NotFound } from "./pages/not_found/not_found";
import { getDBData } from "./functions/func";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shops />,
        loader: getDBData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <div className="container">
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
