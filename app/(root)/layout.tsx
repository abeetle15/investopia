import Navbar from "../../components/Navbar";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="font-work-sans px-4 py-5">{children}</main>
    </>
  );
}
