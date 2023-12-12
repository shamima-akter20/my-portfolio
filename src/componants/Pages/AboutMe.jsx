import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const AboutMe = () => {
  return (
    <div className="bg-black py-14  md:px-10 ">
      <h1
        data-aos="fade-right"
        className="font-display text-white text-lg md:text-2xl lg:text-4xl pb-20 pt-8 text-center">
         ABOUT
        <span className="text-yellow-500"> ME</span>
      </h1>

     <div className="flex about items-center  lg:px-24 xl:px-36 md:py-16 mb-56">
     <div className="flex ">
        <div data-aos="fade-down-right" className="relative flex-1">
          <img
            className="rounded-3xl lg:ml-24 xl:ml-56 h-36 md:h-48 lg:h-60 xl:h-80 border-l-4 border-b-4 border-yellow-500"
            src="https://i.ibb.co/7RtvVkp/me.jpg"
            alt=""
          />
        </div>

        <div
          data-aos="fade-up-left"
          className="backdrop-filter backdrop-blur-lg 
         rounded-3xl border-t-4 border-r-4 border-yellow-500 ml-2 abouttwo
         xl:ml-[500px] mb-10 mt-24 md:mt-32 absolute h-62 md:h-72 lg:h-96 xl:h-96 w-64  md:w-[540px] flex-1 bg-white bg-opacity-30"
        >
          <div className="p-5 md:p-14 xl:p-16">
            <h1 className="text-lg md:text-3xl font-bold  text-white">
              My name is
              <span className="text-yellow-500 "> Shamima</span>{" "}
            </h1>
            <h1 className="md:pb-3 h- text-white text-base md:text-xl font-thin">
              From Dhaka, Bangladesh
            </h1>
            <p className="text-xs lg:text-base text-white">
              As a dedicated web developer, I thrive on turning ideas into
              dynamic digital experiences. I am committed to crafting solutions
              that seamlessly blend functionality with aesthetics. Beyond the
              code, I am passionate about staying at the forefront of industry
              trends and continuously expanding my knowledge. Let us embark on a
              journey of innovation and bring your digital vision to life.
            </p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default AboutMe;
