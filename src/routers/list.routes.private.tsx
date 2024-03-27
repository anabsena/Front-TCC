import { Navigate } from "react-router-dom";
import ListProjects from "../screens/Admin/Project/listProjects.tsx/ListProjects";
import ListAdmin from "../screens/Admin/User/listAdmin.tsx/ListAdmin";
import CreateProject from "../screens/Admin/Project/CreateProject/CreateProject";
import CreateCategory from "../screens/Admin/Project/Category/CreateCategory/CreateCategory";
import ListCategory from "../screens/Admin/Project/Category/ListCategory/ListCategory";

export default function PrivateRoute() {
  return {
    children: [
        {
            path: "*",
            element: <Navigate to="/admin" />,
          },
          {
            path: '/projects',
            element: <ListProjects />,
          },
          {
            path: '/admin',
            element: <ListAdmin />,
          },
          {
            path: '/new-project',
            element: <CreateProject />,
          },
          {
            path: '/new-category',
            element: <CreateCategory/>,
          },
          {
            path: '/categorys',
            element: <ListCategory/>,
          }
      
    ]
  };
}
