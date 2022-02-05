export default function Container({ children }) {
  return (
    <>
      <div className="bg-gradient-to-b from-[#374151] to-[#111827] min-h-screen text-white">
        <div className="container mx-auto pb-10 ">{children}</div>
      </div>
    </>
  );
}
