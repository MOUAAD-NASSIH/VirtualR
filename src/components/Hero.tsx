import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function Hero() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl text-center tracking-wide">
        VirtaulR build tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <p className="mt-10 sm:text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intutive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center items-center my-10 gap-2 sm:gap-8">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 sm:py-3 sm:px-4 rounded-md text-sm sm:text-lg"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-2 px-3 sm:py-3 sm:px-4 border rounded-md text-sm sm:text-lg"
        >
          Documentation
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-5 md:mt-10">
        <video
          className="w-full md:w-1/2 rounded-lg border border-orange-700 shadow-orange-400 my-4 md:mx-2 md:my-4"
          autoPlay
          muted
          loop
        >
          <source src={video1} />
          Your browser does not support the video tag.
        </video>
        <video
          src={video2}
          className="w-full md:w-1/2 rounded-lg border border-orange-700 shadow-orange-400 my-4 md:mx-2 md:my-4"
          autoPlay
          muted
          loop
        >
          <source src={video1} />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Hero;
