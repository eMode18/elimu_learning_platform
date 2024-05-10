// components/Intro.tsx
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.pexels.com/photo/group-of-people-in-art-exhibit-716281/')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First column with the image */}
          <div className="col-span-1 md:col-span-1">
            <Image
              src={
                "https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="Feature Image"
              width={500} // Adjust based on your image dimensions
              height={300} // Adjust based on your image dimensions
              //objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Second column with the header and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
                Elimu learning project
              </h1>
              <p className="mt-3 text-xl text-blask sm:mt-5 sm:text-2xl">
                Get the most out of your learning experience with Elimu
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <Link
                    href="#login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Get familiar with Elimu
                  </Link>
                </div>
              </div>

              <nav
                className="mt-5 -mx-2 -my-2 flex flex-wrap justify-center"
                aria-label="Breadcrumb"
              >
                <div className="px-2 py-2">
                  <Link
                    href="#home"
                    scroll={false}
                    className="text-sm font-medium text-black hover:text-orange-400 hover:font-semibold"
                  >
                    Home
                  </Link>
                </div>
                <div className="px-2 py-2">
                  <Link
                    href="#features"
                    className="text-sm font-medium text-black hover:text-orange-400 hover:font-semibold"
                  >
                    Features
                  </Link>
                </div>
                <div className="px-2 py-2">
                  <Link
                    href="#about"
                    className="text-sm font-medium text-black hover:text-orange-400 hover:font-semibold"
                  >
                    About
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
