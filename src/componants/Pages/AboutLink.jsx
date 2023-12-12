import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const AboutLink = () => {
  return (
    <div  data-aos="fade-down-right" className="bg-black py-6">
       <div className="flex justify-center items-center bg-black">
       
         <Link to='https://www.facebook.com/shamima.sheikkh'>
         <button className="btn btn-circle btn-outline mx-1 md:mx-4 btn-warning">
          <i className="fa-brands fa-facebook text-xl"></i>
          </button>
         </Link>

         <Link to='https://www.instagram.com/arrogant_sayma/'>
         <button className="btn btn-circle btn-outline mx-1 md:mx-4 btn-warning">
          <i className="fa-brands fa-instagram text-xl"></i>
          </button>
         </Link>

          <Link to='https://www.linkedin.com/in/shamima-akter-076b33293/'>
          <button className="btn btn-circle btn-outline mx-1 md:mx-4 btn-warning">
          <i className="fa-brands fa-linkedin text-xl"></i>
          </button>
          </Link>

          <Link to='https://github.com/shamima-akter20'>
          <button className="btn btn-circle btn-outline mx-1 md:mx-4 btn-warning">
          <i className="fa-brands fa-github text-xl"></i>
          </button>
          </Link>

          <Link to='https://join.skype.com/invite/y7omFqWIgyF1'>
          <button className="btn btn-circle btn-outline mx-1 md:mx-4 btn-warning">
          <i className="fa-brands fa-skype text-xl"></i>
          </button>
          </Link>
        </div>
    </div>
  );
};

export default AboutLink;
