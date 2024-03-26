import { Navigate } from "react-router-dom";
import ListProjects from "../screens/listProjects.tsx/ListProjects";
import ListAdmin from "../screens/listAdmin.tsx/ListAdmin";





export default function PrivateRoute() {
  return {
    children: [
        {
            path: "*",
            element: <Navigate to="/sign-in" />,
          },
          {
            path: '/projects',
            element: <ListProjects />,
          },
          {
            path: '/admin',
            element: <ListAdmin />,
          }
      
    ]
  };
}
