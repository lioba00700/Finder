"use client";

import { useState } from "react";

type TapType = "recent7days" | "mutuals" | "unfollowers";

interface TapData {
  name: string;
  value: TapType;
  index: number;
}

const TAP_LIST: TapData[] = [
  { name: "최근 7일", value: "recent7days", index: 0 },
  { name: "맞팔로우", value: "mutuals", index: 1 },
  { name: "언팔로우", value: "unfollowers", index: 2 },
];

export default function MainPage() {
  const [activeTap, setActiveTap] = useState<TapData>(TAP_LIST[0]!);

  const renderContent = () => {
    switch (activeTap.value) {
      case "recent7days":
        return <Recent7DaysContents />;
      case "mutuals":
        return <MutualsContents />;
      case "unfollowers":
        return <UnfollowersContents />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-25 max-[400px]:pt-15 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div className="size-15 bg-gray-200"></div>
        <h3 className="text-xl font-bold">
          인스타그램 <span className="text-brand-primary">팔로워</span>
        </h3>
      </div>
      <div className="relative flex border-b border-gray-200 pb-1 ">
        {TAP_LIST.map((tap) => (
          <nav key={tap.value} onClick={() => setActiveTap(tap)}>
            <button
              className={`w-20 transition-colors ${activeTap.value === tap.value ? "text-black font-medium" : "text-gray-500"}`}
            >
              {tap.name}
            </button>
          </nav>
        ))}
        <div
          className={`absolute bottom-0 w-20 transition-transform duration-500  border-b border-black`}
          style={{ transform: `translateX(${activeTap.index * 100}%)` }} // index가 1이면 100% 이동
        />
      </div>
      {renderContent()}
    </div>
  );
}

function Recent7DaysContents() {
  return (
    <>
      <div className="flex items-center group justify-between border focus-within:border-brand-primary border-gray-200 p-3 rounded-lg">
        <input
          className="flex-1 outline-none"
          type="text"
          placeholder="검색할 아이디를 입력하세요."
        />
        <div className="bg-gray-200 size-5 ml-2 rounded-full"></div>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">2025.00.00</p>
          <div className="flex items-center justify-between border border-gray-200 p-3 rounded-lg">
            <p>yeeee_ee07</p>
            <div className="flex items-center gap-2">
              <p className="text-gray-500">00:00:00</p>
              <p className="rounded-full bg-brand-primary text-white text-xs px-2 py-1">
                나를 팔로우한 사람
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between border border-gray-200 p-3 rounded-lg">
            <p>yeeee_ee07</p>
            <div className="flex items-center gap-2">
              <p className="text-gray-500">00:00:00</p>
              <p className="rounded-full bg-brand-primary text-white text-xs px-2 py-1">
                나를 팔로우한 사람
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MutualsContents() {
  return (
    <>
      <div className="flex items-center justify-between border border-gray-200 p-3 rounded-lg">
        <input type="text" placeholder="검색할 아이디를 입력하세요." />
        <div className="bg-gray-200 size-5 rounded-full"></div>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">2025.00.00</p>
          <div className="flex items-center justify-between border border-gray-200 p-3 rounded-lg">
            <p>yeeee_ee07</p>
            <p className="text-gray-500">00:00:00</p>
          </div>
          <div className="flex items-center justify-between border border-gray-200 p-3 rounded-lg">
            <p>yeeee_ee07</p>
            <p className="text-gray-500">00:00:00</p>
          </div>
        </div>
      </div>
    </>
  );
}

function UnfollowersContents() {
  return (
    <>
      <div className="flex items-center justify-between border border-gray-200 p-3 rounded-lg">
        <input type="text" placeholder="검색할 아이디를 입력하세요." />
        <div className="bg-gray-200 size-5 rounded-full"></div>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">2025.00.00 ~ 2025.00.00 </p>
          <div className="flex items-center justify-between border border-gray-200 p-3 rounded-lg">
            <p>yeeee_ee07</p>
            <p className="text-gray-500">00:00:00</p>
          </div>
          <div className="flex items-center justify-between border border-gray-200 p-3 rounded-lg">
            <p>yeeee_ee07</p>
            <p className="text-gray-500">00:00:00</p>
          </div>
        </div>
      </div>
    </>
  );
}
