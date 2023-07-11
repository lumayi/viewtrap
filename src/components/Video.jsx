import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { useYoutubeContext } from '../context/YoutubeContext';
import { dateFormatter, durationFormatter, thousandFormatter } from '../utils';

export default function Video({ video }) {
  const { youtube } = useYoutubeContext();
  const { title, thumbnails, publishTime, channelTitle, channelId } =
    video.snippet;

  const { data: detail } = useQuery(['detail', video.id.videoId], () =>
    youtube.video(video.id.videoId)
  );

  const { data: channel } = useQuery(['channel', channelId], () =>
    youtube.channel(channelId)
  );
  return (
    <>
      {detail && channel && (
        <tr className="text-center">
          <td>
            <input type="checkbox" />
          </td>
          <td className="flex items-center justify-center py-4">
            <Link
              target="_blank"
              className="flex items-center justify-center w-3/4 aspect-video overflow-hidden rounded relative"
              to={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            >
              <img src={thumbnails.medium.url} alt={title} className="w-full" />
              <span className="absolute bottom-1 right-1 text-white bg-black text-xs px-1">
                {durationFormatter(detail.contentDetails.duration)}
              </span>
            </Link>
          </td>
          <td>
            <span className="text-sm">{title}</span>
          </td>
          <td className="text-sm">
            {thousandFormatter(detail.statistics.viewCount)}
          </td>
          <td className="text-sm">{channelTitle}</td>
          <td className="text-sm">
            {thousandFormatter(channel.statistics.subscriberCount)}
          </td>
          <td className="text-sm">{dateFormatter(publishTime)}</td>
        </tr>
      )}
    </>
  );
}
