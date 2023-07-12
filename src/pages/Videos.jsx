import React, { useCallback, useEffect, useState } from 'react';
import VideosNav from '../components/VideosNav';
import Video from '../components/Video';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useYoutubeContext } from '../context/YoutubeContext';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeContext();
  const [count, setCount] = useState(0);
  const {
    isLoading,
    error,
    data: videos,
    fetchNextPage,
  } = useInfiniteQuery(
    ['videos', keyword],
    ({ pageParam = 'CAUQAA' }) => youtube.search(keyword, pageParam),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.nextPageToken,
    }
  );
  const handleScroll = useCallback(() => {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    if (
      totalHeight - 0.5 <= window.scrollY &&
      window.scrollY <= totalHeight + 0.5
    ) {
      if (count < 9) {
        setCount((count) => count + 1);
        return fetchNextPage();
      } else return;
    }
  }, [count, fetchNextPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [count, handleScroll]);

  return (
    <>
      <VideosNav />
      {isLoading && 'Loading...'}
      {error && '다시 시도해주십시요.'}
      {videos && (
        <section className="flex justify-center">
          {console.log(videos)}
          <table className="w-full mx-4 min-h-fit">
            <thead className="bg-gray-200 h-12 sticky top-36 z-10">
              <tr className="text-center">
                <th className="font-medium rounded-tl-lg w-14">선택</th>
                <th className="font-medium w-44 ">썸네일</th>
                <th className="font-medium">제목</th>
                <th className="font-medium w-36">조회수</th>
                <th className="font-medium w-40">채널명</th>
                <th className="font-medium w-36">구독자수</th>
                <th className="font-medium rounded-tr-lg w-32">게시일</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {videos.pages.map((page) =>
                page.items.map((video) => (
                  <Video video={video} key={video.id.videoId} />
                ))
              )}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
