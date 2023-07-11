import axios from 'axios';

export default class fakeYoutubeClient {
  async search() {
    return axios.get('/data/search.json');
  }
  async video() {
    return axios.get('/data/video.json');
  }
  async channel() {
    return axios.get('/data/channel.json');
  }
}
