import { useState } from "react";
import Link from "next/link";

export default function Navbar({ categories }) {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);

  const listDropdown = [
    {
      title: "Internet",
      href: "/posts",
    },
    {
      title: "Books",
      href: "/posts",
    },
    {
      title: "Open Source",
      href: "/posts",
    },
  ];

  function openDropdown() {
    setDropdown(!dropdown);
  }
  return (
    <nav className="py-10">
      <div className="flex items-center">
        <div className="w-3/12 md:hidden">
          <button
            onClick={() => {
              setOffcanvas(!offcanvas);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  d="M3 12H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 6H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="md:w-2/12 w-6/12 flex justify-center md:justify-start">
          <Link href="/">
            <a>
              <div className="h-7 w-7 bg-[#4B5563] rounded flex items-center justify-center mr-2 font-logo text-lg">
                E
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <div className="text-lg">Epictus</div>
            </a>
          </Link>
        </div>
        <div className="w-3/12 text-right md:hidden">
          <button
            onClick={() => {
              setSearch(!search);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div
          className={`md:w-8/12 w-full transition-all top-0 bg-gradient-to-b from-[#374151] to-[#111827] md:py-0 md:pl-0 py-10 pl-20  fixed md:static md:bg-none h-screen md:h-auto ${
            offcanvas ? "left-0" : "-left-full"
          }`}
        >
          <button
            className="absolute top-10 left-4 md:hidden"
            onClick={() => {
              setOffcanvas(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <ul className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-10">
            {categories.map(({ attributes: { name, slug } }) => {
              return (
                <li className="hover:underline" key={slug}>
                  <Link href={`/category/${slug}`}>
                    <a>{name}</a>
                  </Link>
                </li>
              );
            })}

            <li
              className="relative hover:underline"
              onClick={openDropdown}
              // onMouseEnter={openDropdown}
              // onMouseLeave={openDropdown}
            >
              <button className="cursor-pointer flex items-center">
                Lainnya
                <svg
                  className="ml-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {dropdown && (
                <ul className="absolute w-[150px] bg-[#1F2937] rounded text-gray-400 overlay-hidden cursor-pointer mt-2 shadow-2xl ">
                  {listDropdown.map(({ title, href }) => (
                    <li
                      key={title}
                      className="px-4 py-1 rounded hover:bg-gray-500 border-b border-white/5 last:border-0"
                    >
                      <Link href={href}>
                        <a>{title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div
          className={`md:w-2/12 absolute md:static w-full left-0 px-4 md:px-0 transition-all ${
            search ? "top-8" : "-top-full"
          }`}
        >
          <button
            className="absolute top-2 right-8 md:hidden "
            onClick={() => {
              setSearch(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <input
            type="text"
            className="bg-[#1F2937] rounded-full py-2 w-full outline-none px-9 bg-search"
            placeholder="Search"
          />
        </div>
      </div>
    </nav>
  );
}
