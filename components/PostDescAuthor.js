export default function PostDescAuthor({
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <div className="flex items-center">
      <img src={authorAvatar} alt="Avatar Picture" className="w-12 h-12 mr-3" />
      <div>
        <h3>{authorName}</h3>
        <p className="text-sm text-white/60">{authorJob}</p>
      </div>
    </div>
  );
}
