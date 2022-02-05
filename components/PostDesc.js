export default function PostDesc({
  category,
  date,
  title,
  description,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <div className="space-y-3 ">
      <div className="flex text-sm text-white/60 space-x-3">
        <p>{category}</p>

        <span className="font-logo">&#8226;</span>
        <p>{date}</p>
      </div>
      <h2 className="text-2xl leading-relaxed">{title}</h2>
      <p className="text-md text-white/60 leading-relaxed">{description}</p>
      <div className="flex items-center">
        <img
          src={authorAvatar}
          alt="Avatar Picture"
          className="w-12 h-12 mr-3"
        />
        <div>
          <h3>{authorName}</h3>
          <p className="text-sm text-white/60">{authorJob}</p>
        </div>
      </div>
    </div>
  );
}
