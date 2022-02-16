export default function PostDescHeader({ category, date, title, center }) {
  return (
    <>
      <div className="flex text-sm text-white/60 space-x-3">
        <p>{category}</p>
        <span className="font-logo">&#8226;</span>
        <p>{date}</p>
      </div>
      <h2 className={`text-2xl leading-relaxed ${center && "text-center"}`}>
        {title}
      </h2>
    </>
  );
}
