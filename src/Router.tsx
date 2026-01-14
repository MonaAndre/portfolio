import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";


// Base path for GitHub Pages
const base = "/Portfolio";

export const router = createBrowserRouter([
  {
    path: `${base}/`, // Prefix all paths with the base directory
    element: <Layout/>,
    children: [
      {
        path: `${base}/`, // Home page
        element: <Home />,
      },
       {
        path: "*", // Catch-all för 404
        element: <NotFound />,
      },
    ],
  },
]);