import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <Hero/>
      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold theme-color text-center">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 text-center">
            Here are some of the projects I've worked on.
          </p>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="p-6   rounded-lg shadow-lg transform hover:scale-105 transition duration-500 theme-bg">
              <Image
                src="/images/projects/project-1.png"
                alt="Project 1"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-semibold theme-color">
                E-Commerce Platform
              </h3>
              <p className="mt-2 theme-color">
                A full-stack e-commerce platform built with React and Node.js.
              </p>
              <a
                href="#"
                className="mt-4 inline-block px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/80"
              >
                View Project
              </a>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 theme-bg">
              <Image
                src="/images/projects/project-3.png"
                alt="Project 2"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-semibold theme-color">
                Task Management App
              </h3>
              <p className="mt-2 theme-color">
                A task management app built with Vue.js and Firebase.
              </p>
              <a
                href="#"
                className="mt-4 inline-block px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/80"
              >
                View Project
              </a>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 theme-bg">
              <Image
                src="/images/projects/project-2.png"
                alt="Project 3"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-semibold theme-color">
                Portfolio Website
              </h3>
              <p className="mt-2 theme-color">
                A responsive portfolio website built with Next.js and Tailwind CSS.
              </p>
              <a
                href="#"
                className="mt-4 inline-block px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/80"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20  ">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold theme-color text-center">
            My Skills
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 text-center">
            Technologies I work with.
          </p>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Skill 1 */}
            <div className="p-6 theme-bg rounded-lg shadow-lg text-center">
              <Image
                src="/images/skills/laravel.svg"
                alt="Laravel"
                width={150}
                height={150}
                className="w-16 h-16 mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold theme-color">
                Laravel
              </h3>
            </div>

            {/* Skill 2 */}
            <div className="p-6 theme-bg rounded-lg shadow-lg text-center">
              <Image
                src="/images/skills/nextjs.png"
                alt="Nextjs"
                width={150}
                height={150}
                className="w-16 h-16 mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold theme-color">
                NextJs
              </h3>
            </div>

            {/* Skill 3 */}
            <div className="p-6 theme-bg rounded-lg shadow-lg text-center">
              <Image
                src="/images/skills/nodejs.png"
                alt="Nodejs"
                width={150}
                height={150}
                className="w-16 h-16 mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold theme-color">
                NodeJs
              </h3>
            </div>

            {/* Skill 4 */}
            <div className="p-6 theme-bg rounded-lg shadow-lg text-center">
              <Image
                src="/images/skills/vuejs.png"
                alt="Vuejs"
                width={150}
                height={150}
                className="w-16 h-16 mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold theme-color">
                VueJs
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 0">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold theme-color text-center">
            Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 text-center">
            What people say about my work.
          </p>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="p-6   rounded-lg shadow-lg theme-bg">
              <p className="theme-color">
                "Sharafat is an exceptional developer. His attention to detail and problem-solving skills are unmatched."
              </p>
              <div className="mt-4 flex items-center">
                <Image
                  src="/images/avators/profile.png"
                  alt="Client 1"
                  width={50}
                  height={50}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold theme-color">
                    John Doe
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">CEO, Company A</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6   rounded-lg shadow-lg theme-bg">
              <p className="theme-color">
                "Working with Sharafat was a pleasure. He delivered the project on time and exceeded our expectations."
              </p>
              <div className="mt-4 flex items-center">
                <Image
                  src="/images/avators/profile.png"
                  alt="Client 2"
                  width={50}
                  height={50}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold theme-color">
                    Jane Smith
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">CTO, Company B</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6   rounded-lg shadow-lg theme-bg">
              <p className="theme-color">
                "Sharafat's expertise in software development is top-notch. Highly recommended!"
              </p>
              <div className="mt-4 flex items-center">
                <Image
                  src="/images/avators/profile.png"
                  alt="Client 3"
                  width={50}
                  height={50}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold theme-color">
                    Michael Brown
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">Founder, Company C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20  ">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold theme-color text-center">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 text-center">
            Let's build something amazing together.
          </p>

          <form className="mt-8 max-w-2xl mx-auto">
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full mt-6 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              className="mt-6 px-8 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}