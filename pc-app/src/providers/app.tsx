import * as React from "react";

import { HashRouter as Router } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { Spinner } from "@/components/Elements";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen">
            <Spinner size="xl" />
          </div>
        }
      >
        <NextUIProvider>
          <Router>{children}</Router>
        </NextUIProvider>
      </React.Suspense>
    </QueryClientProvider>
  );
};
