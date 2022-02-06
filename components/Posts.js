import PostDesc from "./PostDesc";

export default function Posts({ thumbnail, ...infoPost }) {
  return (
    <section>
      <img
        src={thumbnail}
        alt=""
        className="mb-4 w-full rounded-2xl h-60 object-cover"
      />
      <PostDesc {...infoPost} />
    </section>
  );
}
