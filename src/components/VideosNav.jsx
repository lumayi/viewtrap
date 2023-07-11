import React from 'react';
import {
  BiSearch,
  BiCaretDown,
  BiFolderPlus,
  BiEnvelope,
  BiTrash,
} from 'react-icons/bi';
import { VscSettings } from 'react-icons/vsc';

export default function VideosNav() {
  return (
    <section className="flex justify-between py-8 px-4 sticky top-14 z-10 bg-gray-100">
      <div className="flex gap-4">
        <form className="flex border-[1px] border-0-main rounded-lg w-fit bg-white">
          <div className="flex px-2 justify-center items-center">
            <input
              placeholder="단어나 문장 입력"
              className="rounded-lg indent-2 text-sm h-8 w-44 outline-none"
            />
            <img
              src="/images/south-korea.png"
              className="rounded-full border w-5"
              alt="flag"
            />
          </div>
          <button type="button" className="bg-0-main px-3">
            <BiSearch className="text-white" />
          </button>
        </form>
        <button className="text-sm bg-0-main text-white px-3 rounded">
          주방템(예시) 1회 검색
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            className="bg-white flex items-center px-2 rounded shadow-sm"
          >
            <span className="text-sm">검색 내역</span>
            <BiCaretDown />
          </button>
          <button
            type="button"
            className="bg-white rounded px-3 shadow-sm text-lg"
          >
            <VscSettings className="rotate-90 opacity-50" />
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          className="bg-white flex items-center px-3 py-2 rounded-lg gap-1"
        >
          <BiFolderPlus />
          <span className="text-sm">영상 수집</span>
        </button>
        <button
          type="button"
          className="bg-white flex items-center px-3 py-2 rounded-lg gap-1"
        >
          <BiEnvelope />
          <span className="text-sm">연락처 수집</span>
        </button>
        <button
          type="button"
          className="bg-white flex items-center px-3 py-2 rounded-lg gap-1"
        >
          <BiTrash />
          <span className="text-sm">영상 제거</span>
        </button>
        <button
          type="button"
          className="bg-white flex items-center px-3 py-2 rounded-lg gap-1"
        >
          <BiTrash />
          <span className="text-sm">채널 제거</span>
        </button>
        <button
          type="button"
          className="bg-white flex items-center px-3 py-2 rounded-lg gap-1"
        >
          <span className="text-sm">123</span>
        </button>
      </div>
    </section>
  );
}
