import React, { useEffect, useState } from 'react';
import {
  BiSearch,
  BiCaretDown,
  BiCaretUp,
  BiFolderPlus,
  BiEnvelope,
  BiTrash,
} from 'react-icons/bi';
import { VscSettings } from 'react-icons/vsc';
import { useNavigate, useParams } from 'react-router-dom';
import cls from 'classnames';

export default function VideosNav() {
  const [search, setSearch] = useState('');
  const [toggled, setToggled] = useState(false);
  const { keyword } = useParams();
  const navigate = useNavigate();
  const history = JSON.parse(localStorage.getItem('history')) || [];
  const handleSumbit = (e) => {
    e.preventDefault();
    history.unshift(search);
    localStorage.setItem('history', JSON.stringify(history));
    navigate(`/videos/${search}`);
  };
  const handleHistory = () => setToggled(!toggled);
  useEffect(() => {
    setSearch(keyword || '');
  }, [keyword]);
  return (
    <>
      <section className="flex justify-between py-8 px-4 sticky top-14 z-10 bg-gray-100">
        <div className="flex gap-4">
          <form
            className="flex border-[1px] border-0-main rounded-lg w-fit bg-white"
            onSubmit={handleSumbit}
          >
            <div className="flex px-2 justify-center items-center">
              <input
                placeholder="단어나 문장 입력"
                className="rounded-lg indent-2 text-sm h-8 w-44 outline-none"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <img
                src="/images/south-korea.png"
                className="rounded-full border w-5"
                alt="flag"
              />
            </div>
            <button type="submit" className="bg-0-main px-3 rounded-r">
              <BiSearch className="text-white" />
            </button>
          </form>
          <button
            className="text-sm bg-0-main text-white px-3 rounded"
            onClick={handleSumbit}
          >
            {keyword || '김연아'}(예시) 1회 검색
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleHistory}
              type="button"
              className={cls(
                'flex items-center px-2 rounded shadow-sm gap-2',
                { 'bg-white': !toggled },
                { 'bg-green-700 text-white': toggled }
              )}
            >
              <span className="text-sm">검색 내역</span>
              {toggled ? <BiCaretUp /> : <BiCaretDown />}
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
      {toggled && (
        <section className="w-full px-4 mb-5">
          <div className="flex gap-4 text-sm h-12 items-center justify-center bg-gray-300 rounded-t-md px-10">
            검색내역
          </div>
          <div className="bg-white p-7 rounded-b-md flex justify-center gap-2">
            {history.map((value, index) => (
              <button
                key={value + index}
                type="button"
                className={cls(
                  'px-4 py-2 rounded text-sm',
                  { 'bg-0-main': index === 0 },
                  { 'bg-gray-100': index !== 0 }
                )}
              >
                {value}
              </button>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
