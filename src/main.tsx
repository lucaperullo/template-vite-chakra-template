import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router";
import { App } from "./App";
import { Provider } from "./components/ui/provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
