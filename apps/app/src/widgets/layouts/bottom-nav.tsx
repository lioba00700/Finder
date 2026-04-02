"use client";

import { useRouter } from "next/navigation";

export function BottomNav() {
  const router = useRouter();
  return (
    <nav className="bottom-0 left-0 right-0 h-15 border-gray-200 bg-white">
      <div className="flex relative justify-around h-full items-center">
        {[
          { name: "홈", href: "/main" },
          { name: "업로드", href: "/upload" },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.href)}
            className="flex-1 text-center py-5 text-xl font-medium text-gray-700"
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
