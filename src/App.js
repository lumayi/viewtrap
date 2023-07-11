import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeContextProvider } from './context/YoutubeContext';

function App() {
  const client = new QueryClient();

  return (
    <>
      <Header />
      <YoutubeContextProvider>
        <QueryClientProvider client={client}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeContextProvider>
    </>
  );
}

export default App;
