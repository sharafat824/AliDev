"use client";
import { useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    const options = {
      strings: ["Software Developer", "Web Developer", "Full-Stack Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };

    const typed = new Typed("#typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex items-center justify-center py-10 lg:py-20">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <h1 className="text-3xl lg:text-4xl font-bold theme-color leading-[1.2]">
            Hi, I'm <span className="text-primary">Sharafat Ali</span>, <br />
            <span id="typed" className="text-primary font-bold"></span>
          </h1>
          <p className="mt-4 text-lg theme-color">
            I specialize in building scalable, efficient, and user-friendly software solutions. With expertise in{" "}
            <span className="font-semibold">PHP, JavaScript, and Node.js</span>, I turn ideas into reality.
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="px-8 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <Link
              href="/contact"
              className="px-8 py-3 text-lg font-medium theme-color border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-150 dark:hover:bg-gray-800 transition duration-300 transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl transform hover:scale-105 transition duration-500">
            <Image
              src="/images/software-dev.png"
              alt="Sharafat Ali"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
