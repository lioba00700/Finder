import type { Metadata } from "next";
import "./globals.css";
import "@package/shared/globals.css";
import { BottomNav } from "@/widgets/layouts/bottom-nav";

export const metadata: Metadata = {
  title: "Finder",
  description: "내 인스타그램의 언팔로우를 알아보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="w-full min-h-screen h-full flex flex-col">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
