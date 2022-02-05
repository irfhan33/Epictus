import PostDesc from "./PostDesc";

export default function Posts({ thumbnail, ...infoPost }) {
  return (
    <section>
      <img src={thumbnail} alt="" className="mb-4" />
      <PostDesc {...infoPost} />
    </section>
  );
}
