"use client";

import { Home, Paperclip } from "lucide-react";
import { useRouter } from "next/navigation";

export function BottomNav() {
  const router = useRouter();
  return (
    <nav className="bottom-0 left-0 right-0 h-15 border-gray-200 bg-white">
      <div className="flex relative justify-center gap-20 h-full items-center">
        {[
          { icon: <Home />, href: "/main" },
          { icon: <Paperclip />, href: "/upload" },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.href)}
            className="text-center py-5 text-xl font-medium text-gray-700"
          >
            {item.icon}
          </button>
        ))}
      </div>
    </nav>
  );
}
