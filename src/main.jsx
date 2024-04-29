import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllCards } from "./components/AllCards";
import store from "./redux/store";
import { Provider } from "react-redux";
// import { SrcCard } from "./components/SrcCard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recipes",
    element: <AllCards />,
  },
  // {
  //   path: "/recipes/:srcData",
  //   element: <SrcCard />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
