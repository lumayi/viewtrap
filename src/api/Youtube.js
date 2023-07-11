export default class Youtube {
  constructor(client) {
    this.client = client;
  }
  async search(keyword) {
    return keyword ? this.#keywordSearch(keyword) : this.#yunakim();
  }

  async video(videoId) {
    return this.client
      .video({
        params: {
          part: 'statistics',
          id: videoId,
        },
      })
      .then((res) => res.data.items[0]);
  }

  async channel(channelId) {
    return this.client
      .channel({
        params: {
          part: 'statistics',
          id: channelId,
        },
      })
      .then((res) => res.data.items[0]);
  }

  #yunakim() {
    this.client
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: '김연아',
        },
      })
      .then((res) => res.data.items);
  }

  #keywordSearch(keyword) {
    this.client
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items);
  }
}
