import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { KanbanContextProvider } from "./context/KanbanContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <KanbanContextProvider>
          <App />
        </KanbanContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
