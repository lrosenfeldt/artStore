import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PropsWithChildren} from 'react';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
  },
});

export const QueryProvider: React.FC<PropsWithChildren> = function ({
  children,
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
