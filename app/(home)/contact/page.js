import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-10 lg:py-20">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-2 space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold theme-color leading-tight">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="mt-4 text-lg theme-color">
              Whether you have a project in mind, need technical consultation, 
              or just want to say hello - I'm always open to new opportunities 
              and interesting conversations.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                <span className="theme-color">Rahim Yar Khan, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="w-6 h-6 text-primary" />
                <a href="mailto:your.email@example.com" className="theme-color hover:text-primary transition-colors">
                  sharafatt6@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="w-6 h-6 text-primary" />
                <a href="tel:+1234567890" className="theme-color hover:text-primary transition-colors">
                  +92 323 3910824
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex space-x-6 justify-center lg:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="theme-color hover:text-primary transition-colors">
                <FaGithub className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="theme-color hover:text-primary transition-colors">
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="theme-color hover:text-primary transition-colors">
                <FaTwitter className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="theme-bg rounded-2xl shadow-2xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold theme-color mb-8">
                Send me a message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block theme-color mb-2">First Name</label>
                    <input
                      type="text"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block theme-color mb-2">Last Name</label>
                    <input
                      type="text"
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block theme-color mb-2">Email</label>
                  <input
                    type="email"
                    className="input"
                  />
                </div>

                <div>
                  <label className="block theme-color mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="input"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 theme-bg">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-4xl font-bold theme-color text-center mb-12">
            Find me here
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.407897911!2d70.27883567265894!3d28.4194397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935645c2a3e4ab7%3A0x92c2c3e8c77a8e1c!2sRahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716203473896!5m2!1sen!2s"

              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="dark:grayscale dark:opacity-90"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}