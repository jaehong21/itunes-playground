import React from "react";
import { Provider } from "jotai";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Practice from "./pages/Practice";

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="*" />
          <Route element={<Practice />} path="/practice" />
        </Routes>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
