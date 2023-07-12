import React from 'react';
import { Link } from 'react-router-dom';
import {
  PiMonitorPlayBold,
  PiGraphBold,
  PiFolderBold,
  PiTrophyBold,
} from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import {
  AiOutlineMinusCircle,
  AiFillYoutube,
  AiOutlineBell,
  AiFillPlayCircle,
} from 'react-icons/ai';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkModeContext } from '../context/DarkModeContext';

export default function Header() {
  const { darkMode, handleDarkMode } = useDarkModeContext();
  return (
    <header className="w-full bg-white h-14 flex items-center justify-center border-b border-b-0-main sticky top-0 z-10 dark:bg-1-bgDark dark:text-white">
      <div className="w-[1280px] flex items-center justify-between px-4">
        <div className="flex items-center gap-5 font-semibold">
          <Link to="/">
            <img src="/images/viewtrap-logo.png" alt="viewtrap-logo" />
          </Link>
          <li className="flex flex-col gap-1 ml-10 group hover:cursor-pointer text-0-main opacity-100">
            <span className="flex items-center gap-1">
              <PiMonitorPlayBold />
              <p>영상 찾기</p>
            </span>
            <span className="h-[0.05rem] w-full bg-0-main transition duration-300"></span>
          </li>
          <li className="flex flex-col opacity-40 gap-1 group hover:cursor-pointer hover:text-0-main hover:opacity-100">
            <span className="flex items-center gap-1">
              <CgProfile />
              <p>채널 찾기</p>
            </span>
            <span className="h-[0.05rem] w-full group-hover:bg-0-main transition duration-300"></span>
          </li>
          <li className="flex flex-col opacity-40 gap-1 group hover:cursor-pointer hover:text-0-main hover:opacity-100">
            <span className="flex items-center gap-1">
              <PiGraphBold />
              <p>채널 분석</p>
            </span>
            <span className="h-[0.05rem] w-full group-hover:bg-0-main transition duration-300"></span>
          </li>
          <li className="flex flex-col opacity-40 gap-1 group hover:cursor-pointer hover:text-0-main hover:opacity-100">
            <span className="flex items-center gap-1">
              <PiFolderBold />
              <p>수집한 영상</p>
            </span>
            <span className="h-[0.05rem] w-full group-hover:bg-0-main transition duration-300"></span>
          </li>
          <li className="flex flex-col opacity-40 gap-1 group hover:cursor-pointer hover:text-0-main hover:opacity-100">
            <span className="flex items-center gap-1">
              <PiTrophyBold />
              <p>멤버십</p>
            </span>
            <span className="h-[0.05rem] w-full group-hover:bg-0-main transition duration-300"></span>
          </li>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <li className="flex items-center gap-1">
            <AiOutlineMinusCircle />
            <p>영상 찾기 2/2,</p>
            <p>노출 확률 0/0</p>
          </li>
          <li>
            <Link
              to="https://viewtrap.com/lectures"
              target="_blank"
              className="flex items-center gap-1 hover:cursor-pointer"
            >
              <p>회원전용 무료 강의</p>
              <AiFillYoutube className="text-lg text-green-500" />
            </Link>
          </li>
          <li className="flex items-center text-lg hover:cursor-pointer">
            <button onClick={handleDarkMode}>
              {darkMode ? (
                <HiMoon className="text-blue-500" />
              ) : (
                <HiSun className="text-yellow-500" />
              )}
            </button>
          </li>
          <li className="flex items-center text-lg hover:cursor-pointer">
            <AiOutlineBell />
          </li>
          <li className="flex items-center text-lg hover:cursor-pointer text-orange-600">
            <AiFillPlayCircle />
          </li>
        </div>
      </div>
    </header>
  );
}
