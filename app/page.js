import Image from "next/image";
import heroImage from "../public/image/rijon.jpg";

export default function Home() {
  return (
    <>
      <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, Im <span className="text-indigo-500">Rijon Ahmed</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A passionate web developer specializing in creating beautiful and functional web experiences.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg shadow hover:bg-indigo-600 transition duration-300"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg shadow hover:bg-gray-600 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="rounded-lg shadow-lg"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
    </>
  );
}
