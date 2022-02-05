import { useState } from "react";
import Navitem from "../components/Navitem";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const listDropdown = [
    {
      title: "Internet",
      href: "#",
    },
    {
      title: "Books",
      href: "#",
    },
    {
      title: "Open Source",
      href: "#",
    },
  ];

  function openDropdown() {
    setDropdown(!dropdown);
  }
  return (
    <nav className="py-10">
      <div className="flex items-center">
        <div className="w-2/12 flex">
          <div className="h-7 w-7 bg-[#4B5563] rounded flex items-center justify-center mr-2 font-logo text-lg">
            E
          </div>
          <div className="text-lg">Epictus</div>
        </div>
        <div className="w-8/12">
          <ul className="flex space-x-10">
            <li className="hover:underline">
              <a href="#">UI Design</a>
            </li>
            <li className="hover:underline">
              <a href="#">Front-end</a>
            </li>
            <li className="hover:underline">
              <a href="#">Back-end</a>
            </li>
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
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="w-2/12">
          <input
            type="text"
            className="bg-[#1F2937]/60 rounded-full py-2 w-full outline-none px-9 bg-search"
            placeholder="Search"
          />
        </div>
      </div>
    </nav>
  );
}
