import React from 'react';
import { Link } from 'react-router-dom';

export default function Video() {
  return (
    <tr className="text-center">
      <td className="">
        <input type="checkbox" />
      </td>
      <td className="flex items-center justify-center py-4">
        <Link
          className="flex items-center justify-center w-3/4 aspect-video overflow-hidden rounded relative"
          to={'url'}
        >
          <img
            src="https://i.ytimg.com/vi/dMaZvpLzGyw/mqdefault.jpg"
            alt=""
            className="w-full"
          />
          <span className="absolute bottom-1 right-1 text-white bg-black text-xs px-1">
            6:23
          </span>
        </Link>
      </td>
      <td>
        <h2 className="text-sm">
          [#유퀴즈온더블럭] 김연아 2세도 피겨?? 절대 안돼🚫 “운동은 이제 꼴도
          보기 싫어” 얼마나 힘들게 훈련했으면🥺 #김연아
        </h2>
      </td>
      <td className="text-sm">909,407</td>
      <td className="text-sm">디글 :Diggle</td>
      <td className="text-sm">2,770,000</td>
      <td className="text-sm">2023-06-29</td>
    </tr>
  );
}
