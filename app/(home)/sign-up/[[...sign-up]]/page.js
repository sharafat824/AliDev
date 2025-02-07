import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 lg:py-0">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <h1 className="text-4xl lg:text-5xl font-bold theme-color leading-tight">
            Hi, I'm <span className="text-primary">Sharafat Ali</span>, a{" "}
            <span className="underline decoration-primary">Software Developer</span>
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
            <a
              href="#contact"
              className="px-8 py-3 text-lg font-medium theme-color border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section - Sign Up Form */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className=" px-8 py-4">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}