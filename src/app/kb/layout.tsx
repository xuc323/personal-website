export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="px-20 py-10">
      <div className="rounded-lg bg-black/5 p-10">
        <div>{children}</div>
      </div>
    </div>
  );
}
