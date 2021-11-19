import React from 'react';
import {Luncher} from "./commons/components/pages";
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <Luncher/>
      {/*<ReactQueryDevtools />*/}
    </QueryClientProvider>
  );
}

export default App;
