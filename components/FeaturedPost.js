import PostDesc from "./PostDesc";
import Link from "next/link";
export default function FeaturedPost(props) {
  // const { attributes: featured } = props.data[0];

  const featured = props;
  const category = featured.category.data.attributes;
  const thumbnail = featured.thumbnail.data.attributes;
  const author = featured.author.data.attributes;

  return (
    <section className="mb-8">
      <div className="flex items-start flex-wrap -mx-2  md:-mx-5 ">
        <div className="w-full sm:w-6/12 md:w-8/12 px-2 md:px-5 rounded mb-6 sm:mb-0">
          <Link href={`/${featured.slug}`}>
            <a>
              <img
                src={process.env.NEXT_PUBLIC_API + thumbnail.url}
                alt=""
                className="w-full h-[350px] rounded-2xl object-cover "
              />
            </a>
          </Link>
        </div>
        <div className="w-full sm:w-6/12 md:w-4/12 px-2 md:px-5">
          <Link href={`/${featured.slug}`}>
            <a>
              <PostDesc
                category={category.name}
                date={featured.createdAt}
                title={featured.title}
                description={featured.headline}
                authorAvatar={
                  process.env.NEXT_PUBLIC_API +
                  author.avatar.data.attributes.url
                }
                authorName={author.name}
                authorJob={author.job}
              />
            </a>
          </Link>
        </div>
      </div>
      <hr className="border-white/10 mt-10" />
    </section>
  );
}
