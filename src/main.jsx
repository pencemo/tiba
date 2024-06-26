import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./contexts/user_context.jsx";
import { LoadingProvider } from "./contexts/loading_state_context.jsx";
import ('preline')

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <LoadingProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </LoadingProvider>
  // </React.StrictMode>
);
