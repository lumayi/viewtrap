import { createContext, useContext } from 'react';
import Youtube from '../api/Youtube';
import fakeYoutubeClient from '../api/fakeYoutubeClient';
import YoutubeClient from '../api/YoutubeClient';

const YoutubeContext = createContext();

const client = new fakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeContextProvider({ children }) {
  return (
    <YoutubeContext.Provider value={{ youtube }}>
      {children}
    </YoutubeContext.Provider>
  );
}

export const useYoutubeContext = () => useContext(YoutubeContext);
