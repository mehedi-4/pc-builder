import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CPU from "./pages/cpu";
import Motherboard from "./pages/mobo";
import Ram from "./pages/ram";
import SSD from "./pages/ssd";
import GPU from "./pages/gpu";
import PSU from "./pages/psu";
import Monitor from "./pages/monitor";
import Keyboard from "./pages/keyboard";
import Case from "./pages/case";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/CPU",
    element: <CPU />,
  },
  {
    path: "/Motherboard",
    element: <Motherboard />,
  },
  {
    path: "/Ram",
    element: <Ram />,
  },
  {
    path: "/SSD",
    element: <SSD />,
  },
  {
    path: "/GPU",
    element: <GPU />,
  },
  {
    path: "/PSU",
    element: <PSU />,
  },
  {
    path: "/Monitor",
    element: <Monitor />,
  },
  {
    path: "/Keyboard-Mouse",
    element: <Keyboard />,
  },
  {
    path: "/Case",
    element: <Case />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
