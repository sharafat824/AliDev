import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 lg:py-0">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <h1 className="text-4xl lg:text-5xl font-bold theme-color leading-tight">
            Welcome Back to <span className="text-primary">Your App</span>
          </h1>
          <p className="mt-4 text-lg theme-color">
            Please sign in to continue and access your personalized dashboard.
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#learn-more"
              className="px-8 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
            <a
              href="#support"
              className="px-8 py-3 text-lg font-medium theme-color border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 transform hover:scale-105"
            >
              Support
            </a>
          </div>
        </div>

        {/* Right Section - Sign In Form */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="rounded-lg shadow-sm px-8 py-2">
              <h2 className="text-2xl font-bold theme-color mb-6 text-center">
                Sign In
              </h2>
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}