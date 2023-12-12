import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ContactMe from "../MorePages/ContactMe";
import More from "../MorePages/More";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/more",
          element:<More></More>
        },
        {
          path:"/contactMe",
          element:<ContactMe></ContactMe>,
        },
      ]
    },
  ]);

  export default router;