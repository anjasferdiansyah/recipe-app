import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleRecipePage from "./pages/SingleRecipePage.jsx";
import BookmarkedRecipePage from "./pages/BookmarkedRecipePage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bookmarked",
    element: <BookmarkedRecipePage />,
  },
  {
    path: "/recipe/:id",
    element: <SingleRecipePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={route} />
    </ThemeProvider>
  </Provider>
);
