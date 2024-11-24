import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Dashboard from "../pages/Dashboard";
import RoadRouteAdd from "../pages/roadRoute/RoadRouteAdd";
import BusAdd from "../pages/bus/BusAdd";
import Login from "../pages/Login";
import ProtectedRoute from "../helpers/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-road-routes",
        element: (
          <ProtectedRoute>
            <RoadRouteAdd />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-bus",
        element: (
          <ProtectedRoute>
            <BusAdd />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
