import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";


// Base path for GitHub Pages
const base = "/portfolio";

export const router = createBrowserRouter([
  {
    path: `${base}/`, // Prefix all paths with the base directory
    element: <Layout />,
    children: [
      {
        path: `${base}/`, // Home page
        element: <Home />,
      },
    ],
  },
]);