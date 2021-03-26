import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./globalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter as Router } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById("root")
);
