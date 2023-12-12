import TypeWriterEffect from "react-typewriter-effect";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[40vh] lg:h-[60vh] xl:h-[80vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co/nfyRkP1/black.jpg)",
        }}
      >
        <div className="hero-content  text-neutral-content">
          <div className="max-w-lg px-16 md:px-0">
            <h1 className="lg:mb-5 text-lg md:text-3xl lg:text-5xl ">Hello</h1>
            <p className="text-lg md:text-3xl lg:text-5xl font-bold lg:mb-5 flex">
              I AM
              <span className="pl-2 text-yellow-500">
                <TypeWriterEffect
                  startDelay={2000}
                  cursorColor="#3F3D56"
                  multiText={["SHAMIMA", "DEVELOPER","DESIGNER", "CODER", "PROGRAMMER"]}
                  multiTextDelay={1000}
                  typeSpeed={70}
                  multiTextLoop
                />
              </span>
            </p>
            <p className=" text-xs md:text-sm lg:text-base">
            A web developer showcasing my professional journey and expertise in the realm of web development.  Explore the intricacies of my work and delve into a world where technology meets creativity. Let us connect to explore potential collaborations and transform concepts into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
