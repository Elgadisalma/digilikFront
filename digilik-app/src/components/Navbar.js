import React from "react";
import '../loader'

export default function Navbar() {
  return (
    <>
        <div id="de-preloader"></div>


        <header className="shadow-lg h-24 hidden md:flex w-full container mx-auto flex justify-center gap-10">
        <a
          href="/"
          className="border w-1/6 flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8 pr-10"
        >
          {/* <img src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png" alt="" /> */}
        </a>
        <nav class="header-links contents font-semibold text-black lg:text-lg pl-10">
          <ul class="flex items-center justify-center  xl:ml-8">
            <li class="p-3 xl:p-6 relative">
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li class="p-3 xl:p-6 relative">
              <a href="/">
                <span>About us</span>
              </a>
            </li> 
            <li class="p-3 xl:p-6 relative">
              <a href="/">
                <span>Realisations</span>
              </a>
            </li>
            <li class="p-3 xl:p-6 relative">
              <a href="/">
                <span>Contact us</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Social media icons */}
        <nav className="hidden xl:contents">
          <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
            {/* Social media icons */}
          </ul>
        </nav>
        {/* Search and Contact button */}
        <div className=" flex items-center px-4 lg:px-6 xl:px-8">
          <a href="/" className="mr-4 lg:mr-6 xl:mr-8">
            {/* Search icon */}
          </a>
          <button className="bg-black hover:bg-blue-600 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
            Contact Me
          </button>
        </div>
      </header>
    </>
  );
}
