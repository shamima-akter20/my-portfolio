import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";

const MySkill = () => {
  return (
    <div className="my-12 mx-10">
      <h1
        className="font-display text-black text-lg 
        md:text-2xl lg:text-4xl pb-20 pt-8 text-center"
      >
        My
        <span className="text-yellow-500"> Skill</span>
      </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-16">

          <div className="flex flex-col items-center">
            <i className="fa-brands fa-html5 text-5xl pb-3"></i>
            <div>
              <CircularProgressbar
                className=" h-20"
                value={77}
                text={`${77}%`}
              />
            </div>
            <h1 className="text-xs py-1">HTML</h1>
          </div>

          <div className="flex  flex-col items-center">
            <i className="fa-brands fa-css3-alt text-5xl pb-3"></i>
            <div>
              <CircularProgressbar
                className=" h-20"
                value={67}
                text={`${67}%`}
              />
            </div>
            <h1 className="text-xs py-1">CSS</h1>
          </div>

          <div className="flex  flex-col items-center">
            <a className=" text-5xl  pb-3">
              <SiTailwindcss />
            </a>
            <div>
              <CircularProgressbar
                className=" h-20"
                value={63}
                text={`${63}%`}
              />
            </div>
            <h1 className="text-xs py-1">Tailwind</h1>
          </div>

          <div className="flex  flex-col items-center">
            <i className="fa-brands fa-js  text-5xl  pb-3"></i>
            <div>
              <CircularProgressbar
                className=" h-20"
                value={57}
                text={`${57}%`}
              />
            </div>
            <h1 className="text-xs py-1">Javascript</h1>
          </div>

          <div className="flex  flex-col items-center">
            <i className="fa-brands fa-react  text-5xl  pb-3"></i>
            <div>
              <CircularProgressbar
                className=" h-20"
                value={49}
                text={`${49}%`}
              />
            </div>
            <h1 className="text-xs py-1">React</h1>
          </div>

          <div className="flex  flex-col items-center">
            <a className=" text-5xl  pb-3">
              <BiLogoMongodb />{" "}
            </a>
            <div>
              <CircularProgressbar
                className=" h-20"
                value={33}
                text={`${33}%`}
              />
            </div>
            <h1 className="text-xs py-1">MongoDB</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
