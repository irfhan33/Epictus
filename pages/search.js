import Layout from "../components/Layout";
import { useState } from "react";
import Posts from "../components/Posts";
import SectionTitle from "../components/SectionTItle";
import Head from "next/head";

export async function getServerSideProps({ query: { q } }) {
  const reqSearch = await fetch(
    process.env.NEXT_PUBLIC_APIURL +
      "/posts?populate[0]=thumbnail&populate[1]=author.avatar&populate[2]=category&filters[title][$contains]=" +
      q
  );
  const resSearch = await reqSearch.json();

  return {
    props: {
      posts: resSearch.data,
      q,
    },
  };
}
export default function posts({ posts, categories, q }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout categories={categories}>
        {!posts.length ? (
          <div className="text-center flex flex-col items-center">
            <p className="md:text-2xl text-xl lg:text-3xl text-white py-10">
              Search: {q}
            </p>
            <h1 className="md:text-5xl text-4xl lg:text-7xl mb-4">
              No result 😥
            </h1>
            <p className="lg:text-xl text-lg w-10/12 md:w-8/12 lg:w-6/12 ">
              We couldnt find any posts with the your keyword. Please try
              another keyword.
            </p>
          </div>
        ) : (
          <>
            <SectionTitle>Search: {q}</SectionTitle>
            <div className="flex flex-wrap -mx-4">
              {posts.map((post) => (
                <div
                  className="w-full sm:w-6/12 md:w-4/12 px-4 mb-6"
                  key={post.id}
                >
                  <Posts {...post.attributes} />
                </div>
              ))}
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
