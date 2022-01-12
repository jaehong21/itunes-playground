import React, { Suspense } from "react";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
