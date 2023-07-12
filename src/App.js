import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeContextProvider } from './context/YoutubeContext';
import { DarkModeContextProvider } from './context/DarkModeContext';

function App() {
  const client = new QueryClient();

  return (
    <DarkModeContextProvider>
      <Header />
      <YoutubeContextProvider>
        <QueryClientProvider client={client}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeContextProvider>
    </DarkModeContextProvider>
  );
}

export default App;
