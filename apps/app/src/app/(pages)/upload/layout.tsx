export default function UploadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-10 flex-1">{children}</div>;
}
