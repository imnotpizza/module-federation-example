import React from 'react';
import RQuery from './RQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RemotePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <section>
        <RQuery />
      </section>
    </QueryClientProvider>
  );
}
