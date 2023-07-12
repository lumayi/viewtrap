export default class Youtube {
  constructor(client) {
    this.client = client;
  }

  async search(keyword, pageToken) {
    return keyword
      ? this.#keywordSearch(keyword, pageToken)
      : this.#yunakim(pageToken);
  }

  async video(videoId) {
    return this.client
      .video({
        params: {
          part: 'contentDetails,statistics',
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

  #yunakim(pageToken) {
    return this.client
      .search({
        params: {
          part: 'snippet',
          maxResults: 20,
          type: 'video',
          q: '김연아',
          pageToken,
        },
      })
      .then((res) => res.data);
  }

  #keywordSearch(keyword, pageToken) {
    return this.client
      .search({
        params: {
          part: 'snippet',
          maxResults: 20,
          type: 'video',
          q: keyword,
          pageToken,
        },
      })
      .then((res) => res.data);
  }
}
