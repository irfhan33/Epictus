import FeaturedPost from "../components/FeaturedPost";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import { useState } from "react";
import Footer from "../components/Footer";
export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      thumbnail: "/thumbnail-2.png",
      category: "INTERNET",
      date: "June 28, 2021",
      title: "How to design a product that can grow itself 10x in year",
      description:
        "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
      authorAvatar: "/author-1.png",
      authorName: "Jenny Wilson",
      authorJob: "Product Designer",
    },
    {
      id: 2,
      thumbnail: "/thumbnail-3.png",
      category: "9 TO 5",
      date: "June 22, 2021",
      title: "The More Important the Work, the More Important the Rest",
      description:
        "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
      authorAvatar: "/author-2.png",
      authorName: "Esther Howard",
      authorJob: "Entrepreneurr",
    },
    {
      id: 3,
      thumbnail: "/thumbnail-4.png",
      category: "INSPIRATIONS",
      date: "June 18, 2021",
      title: "Email Love - Email Inspiration, Templates and Discovery",
      description:
        "Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.",
      authorAvatar: "/author-3.png",
      authorName: "Robert Fox",
      authorJob: "Front-end Engineer",
    },
    {
      id: 1,
      thumbnail: "/thumbnail-2.png",
      category: "INTERNET",
      date: "June 28, 2021",
      title: "How to design a product that can grow itself 10x in year",
      description:
        "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
      authorAvatar: "/author-1.png",
      authorName: "Jenny Wilson",
      authorJob: "Product Designer",
    },
    {
      id: 2,
      thumbnail: "/thumbnail-3.png",
      category: "9 TO 5",
      date: "June 22, 2021",
      title: "The More Important the Work, the More Important the Rest",
      description:
        "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
      authorAvatar: "/author-2.png",
      authorName: "Esther Howard",
      authorJob: "Entrepreneurr",
    },
    {
      id: 3,
      thumbnail: "/thumbnail-4.png",
      category: "INSPIRATIONS",
      date: "June 18, 2021",
      title: "Email Love - Email Inspiration, Templates and Discovery",
      description:
        "Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.",
      authorAvatar: "/author-3.png",
      authorName: "Robert Fox",
      authorJob: "Front-end Engineer",
    },
  ]);
  return (
    <>
      <div className="bg-gradient-to-b from-[#374151] to-[#111827] min-h-screen text-white">
        <div className="container mx-auto pb-10">
          <Navbar />
          <FeaturedPost />
          <div className="flex flex-wrap -mx-4">
            {posts.map((post) => (
              <div
                className="w-full sm:w-6/12 md:w-4/12 px-4 mb-6"
                key={post.id}
              >
                <Posts {...post} />
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
