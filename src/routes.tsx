import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout";
import Home from "@/pages/Home";
import Books from '@/pages/Books';
import ErrorPage from "@/pages/ErrorPage";
import NoMatch from "@/pages/NoMatch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'',
        element: <Home />
      },
      {
        path:'*',
        element:<NoMatch />
      }
    ],
  },
  {
    path: "/books",
    errorElement:<ErrorPage />,
    element: <Books />,
  },
  // {
  //   path:'*',
  //   element:<NoMatch />
  // }
]);

export default router;
