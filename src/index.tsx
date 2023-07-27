import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SettingsScreen from "./components/SettingsScreen/SettingsScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RoundScreen from "./components/RoundScreen/RoundScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/settings",
    element: <SettingsScreen />,
  },
  {
    path: "/game-screen",
    element: <RoundScreen />,
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
