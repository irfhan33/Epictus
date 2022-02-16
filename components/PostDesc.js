import PostDescAuthor from "./PostDescAuthor";
import PostDescHeader from "./PostDescHeader";
import { dateFormat } from "../utils/dateFormat";
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
      <PostDescHeader
        category={category}
        date={dateFormat(date)}
        title={title}
      />
      <p className="text-md text-white/60 leading-relaxed">{description}</p>
      <PostDescAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </div>
  );
}
