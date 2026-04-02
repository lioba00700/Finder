"use client";

const GUIDE_DATA = [
  { title: "버튼을 누르고 설정 및 활동으로 이동" },
  { title: "계정 센터 - 내 정보 및 권한 탭 클릭" },
  { title: "내 정보 내보내기 클릭" },
  { title: "아래와 같이 설정 후 내보내기 시작", image: "" },
];

export default function UploadGuidePage() {
  return (
    <div className="pt-25 max-[400px]:pt-15 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div className="size-10 rounded-full bg-gray-200"></div>
        <h3 className="text-xl font-bold">
          인스타그램 데이터{" "}
          <span className="text-brand-primary">다운로드 가이드</span>
        </h3>
      </div>
      <div className="flex flex-col gap-5">
        {GUIDE_DATA.map((guide, i) => (
          <div key={i} className="flex flex-col">
            <div className="flex items-center gap-4">
              <p className="size-6 rounded-full border-gray-200 border text-sm text-gray-500 flex items-center justify-center">
                {i + 1}
              </p>
              <p className="text-sm">{guide.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <button className="flex items-center text-center justify-center rounded-lg p-5 bg-brand-primary text-white">
          계정 설정으로 이동하기
        </button>
      </div>
    </div>
  );
}
