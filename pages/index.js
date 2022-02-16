import FeaturedPost from "../components/FeaturedPost";
import Posts from "../components/Posts";
import { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

export async function getServerSideProps() {
  const reqFeatured = await fetch(
    process.env.NEXT_PUBLIC_APIURL +
      "/posts?populate[0]=thumbnail&populate[1]=author.avatar&populate[2]=category&filters[featured][$eq]=true"
  );
  const resFeatured = await reqFeatured.json();

  const reqPost = await fetch(
    process.env.NEXT_PUBLIC_APIURL +
      "/posts?populate[0]=thumbnail&populate[1]=author.avatar&populate[2]=category&filters[featured][$eq]=false"
  );
  const resPost = await reqPost.json();

  return {
    props: {
      featured:
        resFeatured.data.length > 0 ? resFeatured.data[0].attributes : false,
      post: resPost.data,
    },
  };
}
export default function Home({ featured, post: initialPost, categories }) {
  const [posts, setPosts] = useState(initialPost);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout categories={categories}>
        {featured && <FeaturedPost {...featured} />}

        <div className="flex flex-wrap -mx-4">
          {posts.map((post) => (
            <div className="w-full sm:w-6/12 md:w-4/12 px-4 mb-6" key={post.id}>
              <Posts {...post.attributes} />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
