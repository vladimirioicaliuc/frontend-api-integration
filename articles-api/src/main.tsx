import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Suspense } from "react";
import App from "./App.tsx";
import { CartProvider } from './context/cartProvider.tsx'
import store from "./redux/store.ts"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={0}>
      <Provider store={store}>
        <CartProvider>
          <App />
        </CartProvider>
      </Provider>
  </Suspense>
);
