import PostDesc from "./PostDesc";

export default function FeaturedPost() {
  return (
    <section className="mb-8">
      <div className="flex items-start flex-wrap -mx-2  md:-mx-5 ">
        <div className="w-full sm:w-6/12 md:w-8/12 px-2 md:px-5 rounded mb-6 sm:mb-0">
          <img
            src="/featured.png"
            alt=""
            className="w-full h-[350px] rounded-2xl object-cover "
          />
        </div>
        <div className="w-full sm:w-6/12 md:w-4/12 px-2 md:px-5">
          <PostDesc
            category="UI Design"
            date="July 2 2022"
            title="Understanding color theory: the color wheel and finding complementary
            colors"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum."
            authorAvatar="/ava-1.png"
            authorName="Leslie Alexander"
            authorJob="UX Designer"
          />
        </div>
      </div>
    </section>
  );
}
