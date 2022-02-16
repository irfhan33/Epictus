import Head from "next/head";
import Layout from "../components/Layout";
import PostDescAuthor from "../components/PostDescAuthor";
import PostDescHeader from "../components/PostDescHeader";
import ReactMarkdown from "react-markdown";

export async function getServerSideProps(ctx) {
  const { slug } = ctx.params;

  const req = await fetch(
    process.env.NEXT_PUBLIC_APIURL +
      "/posts?populate[0]=thumbnail&populate[1]=author.avatar&populate[2]=category&filters[slug][$eq]=" +
      slug
  );

  const res = await req.json();

  // if (!res.length) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      post: res.data[0].attributes,
    },
  };
}
export default function detail({ post, categories }) {
  const category = post.category.data.attributes;
  const thumbnail = post.thumbnail.data.attributes;
  const author = post.author.data.attributes;
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col items-center space-y-3 pb-6 md:pb-10">
        <PostDescHeader
          category={category.name}
          date={post.publishedAt}
          title={post.title}
          center
        />
        <PostDescAuthor
          authorAvatar={
            process.env.NEXT_PUBLIC_API + author.avatar.data.attributes.url
          }
          authorName={author.name}
          authorJob={author.job}
        />
      </div>
      <div className="w-full sm:w-10/12 mx-auto">
        <img
          src={process.env.NEXT_PUBLIC_API + thumbnail.url}
          alt=""
          className="w-full rounded-md object-cover"
        />
      </div>
      <div className="text-md w-full sm:w-10/12 md:w-8/12 mx-auto leading-relaxed pt-10 space-y-4">
        <p>{post.headline}</p>

        <div className="prose text-white max-w-full prose-strong:text-white">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}
