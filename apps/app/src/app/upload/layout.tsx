export default function UploadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="px-12.5 flex-1">{children}</div>;
}
