import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import { AppProvidersProps } from './AppProviders.interface';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const AppProviders = ({ children }: AppProvidersProps) => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        {children}
      </QueryParamProvider>
    </Router>
  </QueryClientProvider>
);
