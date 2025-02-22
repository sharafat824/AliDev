import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto py-10 lg:py-20">
      {/* Hero Section */}
      <section className="flex justify-center lg:py-0">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold theme-color leading-tight">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="mt-4 text-lg theme-color">
              A passionate software developer with 5+ years of experience in crafting robust web applications 
              and solving complex problems through code.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl transform hover:scale-105 transition duration-500">
              <Image
                src="/images/ali.jpg"
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

      {/* Story Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold theme-color text-center mb-12">
            My Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 card">
              <h3 className="text-2xl font-semibold text-primary">Background</h3>
              <p className="theme-color leading-relaxed">
                Starting as a self-taught developer, I've evolved into a full-stack specialist with 
                expertise in both frontend and backend technologies. My journey began with simple 
                WordPress sites and has grown to include complex enterprise applications.
              </p>
            </div>

            <div className="space-y-6 card">
              <h3 className="text-2xl font-semibold text-primary">Philosophy</h3>
              <p className="theme-color leading-relaxed">
                I believe in writing clean, maintainable code and focusing on user-centric solutions. 
                Every project is an opportunity to learn and improve, and I'm passionate about 
                implementing best practices in every aspect of development.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16 space-y-12">
            <div className="flex items-center space-x-8">
              <div className="hidden md:block w-1/4 text-right">
                <span className="bg-primary text-white px-4 py-2 rounded-full">2018-2020</span>
              </div>
              <div className="w-full md:w-3/4 card">
                <h3 className="text-xl font-semibold mb-2">Junior Developer @TechStart</h3>
                <p>
                  Built and maintained PHP-based web applications, collaborated on API integrations, 
                  and learned agile development methodologies.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <div className="w-full md:w-3/4 p-6 card md:order-2">
                <h3 className="text-xl font-semibold mb-2">Full Stack Developer @DigitalSolutions</h3>
                <p>
                  Led a team in developing a SaaS platform using Node.js and React, implemented 
                  microservices architecture, and improved application performance by 40%.
                </p>
              </div>
              <div className="hidden md:block w-1/4 text-left md:order-1">
                <span className="bg-primary text-white px-4 py-2 rounded-full">2020-2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Deep Dive */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold theme-color text-center mb-12">
            Technical Expertise
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">Backend Development</h3>
              <ul className="space-y-2 theme-color">
                <li>PHP/Laravel</li>
                <li>Node.js/NestJS</li>
                <li>REST & GraphQL APIs</li>
                <li>Database Design</li>
              </ul>
            </div>

            <div className="card hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">Frontend Development</h3>
              <ul className="space-y-2 theme-color">
                <li>React/Next.js</li>
                <li>Vue.js/Nuxt.js</li>
                <li>TypeScript</li>
                <li>State Management</li>
              </ul>
            </div>

            <div className="card hover:transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">DevOps & Tools</h3>
              <ul className="space-y-2 theme-color">
                <li>Docker & Kubernetes</li>
                <li>AWS & GCP</li>
                <li>CI/CD Pipelines</li>
                <li>Testing Frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold theme-color text-center mb-12">
            Education & Certifications
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2">BSc in Computer Science</h3>
              <p className="text-gray-500 dark:text-gray-300 mb-4">University of Tech (2015-2019)</p>
              <p className="theme-color">
                Focused on software engineering principles, algorithms, and data structures.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <ul className="space-y-2 theme-color">
                <li>AWS Certified Developer</li>
                <li>Google Cloud Professional</li>
                <li>Scrum Master Certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-4xl font-bold theme-color mb-8">
            Want to Know More?
          </h2>
          <Link
            href="/contact"
            className="px-8 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}