import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from "./views/Home";
import Dash from "./views/Dash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dash",
        element: <Dash />,
      },
    ],
  },
]);

export default router
