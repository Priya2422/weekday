import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { FilterContextProvider } from "./contexts/filterContext";
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </React.StrictMode>,
);
