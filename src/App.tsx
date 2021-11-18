import React from 'react';
import {Luncher} from "./commons/components/pages";
import {Provider} from "react-redux";
import {store} from "./commons/utils/store";
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Luncher/>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
