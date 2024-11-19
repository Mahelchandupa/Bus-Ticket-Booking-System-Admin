import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
          element: <Dashboard />
      },
    ],
  },
]);

export default router;
