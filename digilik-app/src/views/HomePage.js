import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Transition } from "@headlessui/react";
import "../App.css";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set showContent to true after component is mounted to trigger the animation
    setShowContent(true);
  }, []);

  return (
    <>
      <div
        className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed"
        style={{ backgroundImage: 'url("header.png")' }}
      >
        <div className="h-full">
          <Navbar />
          <Transition
            show={showContent}
            enter="transform transition-all duration-1000 ease-in-out delay-300"
            enterFrom="opacity-0 translate-y-[-50px]"
            enterTo="opacity-100 translate-y-0"
          >
            {(ref) => (
              <div
                ref={ref}
                className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center"
              >
                <div className="flex flex-wrap w-full justify-center ">
                  <div className="w-1/2">
                  <h1 className="my-4 text-3xl md:text-5xl text-black opacity-75 font-bold leading-tight text-center md:text-left">
                    Naviguer
                    <span className="bg-clip-text pl-5 pr-5 text-transparent bg-gradient-to-r from-blue-400 via-blue-100 to-blue-300">
                      dans le paysage
                    </span>
                    des affaires !!
                  </h1>
                  </div>
                  <img src="/webdesign-agency.jpg" className="w-1/2" alt="Description de l'image" />
                  {/* <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left transition-transform transform hover:rotate-3">
                    Sub-hero message, not too long and not too short. Make it just
                    right!
                  </p> */}

                  {/* <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                      <label
                        className="block text-blue-300 py-2 font-bold mb-2"
                        for="emailaddress"
                      >
                        Signup for our newsletter
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                        id="emailaddress"
                        type="text"
                        placeholder="you@somewhere.com"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                        type="button"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form> */}
                </div>

                <div className="w-full xl:w-3/5 p-12 overflow-hidden">
                  {/* <div class="loader">
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                  </div> */}
                </div>
                <div className="flex flex-wrap pl-20 pt-20">
                  <div className="box">
                    <div className="inner">
                      <span>Hello </span>
                    </div>
                    <div className="inner">
                      <span>Hello </span>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <span>Hello </span>
                    </div>
                    <div className="inner">
                      <span>Hello </span>
                    </div>
                  </div>
                  <div className="box">
                    <div className="inner">
                      <span>Hello </span>
                    </div>
                    <div className="inner">
                      <span>Hello </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </>
  );
}
