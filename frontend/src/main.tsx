import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import ReactDOM from "react-dom/client";
import './index.css';

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
