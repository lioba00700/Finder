"use client";

import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();

  return (
    <div className="pt-25 max-[400px]:pt-15 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div className="size-15 bg-gray-200"></div>
        <h3 className="text-base font-bold">
          인스타그램 데이터 <span className="text-[#FA298E]">업로드</span>
        </h3>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border border-gray-200 rounded-lg p-5 text-gray-700">
          <p>following.json 파일 업로드</p>
          <div className="bg-gray-200 rounded-full h-5 w-5"></div>
        </div>
        <div className="flex items-center justify-between border border-gray-200 rounded-lg p-5 text-gray-700">
          <p>following.json 파일 업로드</p>
          <div className="bg-gray-200 rounded-full h-5 w-5"></div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button className="flex items-center text-center justify-center rounded-lg p-5 bg-gray-200 text-white">
          <p>following.json 파일 업로드</p>
        </button>
        <div className="flex px-0.5 items-center justify-between text-sm">
          <span className="text-gray-700">데이터를 어떻게 다운로드하나요?</span>
          <span
            className="text-[#FA298E] underline font-semibold"
            onClick={() => router.push("/upload/guide")}
          >
            가이드 보기
          </span>
        </div>
      </div>
    </div>
  );
}
