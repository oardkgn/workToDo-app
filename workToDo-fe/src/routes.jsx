import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from "./views/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

    ],
  },
]);

export default router
