import { createContext, useContext } from 'react';
import Youtube from '../api/Youtube';
import YoutubeClient from '../api/YoutubeClient';

const YoutubeContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeContextProvider({ children }) {
  return (
    <YoutubeContext.Provider value={{ youtube }}>
      {children}
    </YoutubeContext.Provider>
  );
}

export const useYoutubeContext = () => useContext(YoutubeContext);
