import Link from "next/link";
import PostDesc from "./PostDesc";
import Head from "next/head";
export default function Posts(props) {
  const featured = props;
  const category = featured.category.data.attributes;
  const thumbnail = featured.thumbnail.data.attributes;
  const author = featured.author.data.attributes;
  return (
    <section>
      <Link href={`/${featured.slug}`}>
        <a>
          <img
            src={process.env.NEXT_PUBLIC_API + thumbnail.url}
            alt=""
            className="mb-4 w-full rounded-2xl h-60 object-cover"
          />
          <PostDesc
            category={category.name}
            date={featured.createdAt}
            title={featured.title}
            description={featured.headline}
            authorAvatar={
              process.env.NEXT_PUBLIC_API + author.avatar.data.attributes.url
            }
            authorName={author.name}
            authorJob={author.job}
          />
        </a>
      </Link>
    </section>
  );
}
