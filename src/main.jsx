import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Route";

createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </div>
);
