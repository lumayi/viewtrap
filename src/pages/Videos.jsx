import React from 'react';
import VideosNav from '../components/VideosNav';
import Video from '../components/Video';

export default function Videos() {
  return (
    <>
      <VideosNav />
      <section className="flex justify-center">
        <table className="w-full mx-4 table-fixed">
          <thead className="bg-gray-200 h-12 sticky top-36 z-10 ">
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
          <tbody className="bg-white overflow-t-hidden">
            <Video />
          </tbody>
        </table>
      </section>
    </>
  );
}
