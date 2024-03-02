import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleRecipePage from "./pages/SingleRecipePage.jsx";
import React from "react";
import SearchRecipePage from "./pages/SearchRecipePage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recipe",
    element: <SearchRecipePage />,
  },
  {
    path: "/recipe/:id",
    element: <SingleRecipePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={route} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
