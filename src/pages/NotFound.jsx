import React from 'react';

export default function NotFound() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <iframe
          src="https://giphy.com/embed/7NoNw4pMNTvgc"
          width="480"
          height="480"
          class="giphy-embed"
          allowFullScreen
          title="notfound-image"
          className="rounded-full"
        ></iframe>
        <h2 className="text-xl font-semibold">
          요청하신 페이지를 찾을 수 없습니다 😿
        </h2>
      </div>
    </div>
  );
}
