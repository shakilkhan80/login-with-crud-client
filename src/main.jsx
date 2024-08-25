import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Route";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </div>
);
