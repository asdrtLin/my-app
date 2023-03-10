import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Books from '@/pages/Books';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: <Books />,
  },
]);

export default router;
