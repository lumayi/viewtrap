import axios from 'axios';

export default class fakeYoutubeClient {
  async search() {
    axios.get('/data/search.json');
  }
  async video() {
    axios.get('/data/video.json');
  }
  async channel() {
    axios.get('/data/channel.json');
  }
}
