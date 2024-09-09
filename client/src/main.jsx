import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { store } from "./Redux/store.js";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
