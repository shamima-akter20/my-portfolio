import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-neutral-content">
        <aside>
          <a className="text-white text-xl md:text-2xl lg:text-4xl font-display pl-4">
            SHAM<span className="text-yellow-500">IM</span>A
          </a>
          <div className="flex justify-center items-center">
            <Link to="https://www.facebook.com/shamima.sheikkh">
              <button className="btn btn-sm md:btn-md btn-circle btn-outline mx-1  btn-warning">
                <i className="fa-brands fa-facebook text-xl"></i>
              </button>
            </Link>

            <Link to="https://www.instagram.com/arrogant_sayma/">
              <button className="btn btn-sm md:btn-md btn-circle btn-outline mx-1  btn-warning">
                <i className="fa-brands fa-instagram text-xl"></i>
              </button>
            </Link>

            <Link to="https://www.linkedin.com/in/shamima-akter-076b33293/">
              <button className="btn  btn-sm md:btn-md btn-circle btn-outline mx-1  btn-warning">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </button>
            </Link>

            <Link to="https://github.com/shamima-akter20">
              <button className="btn  btn-sm md:btn-md btn-circle btn-outline mx-1  btn-warning">
                <i className="fa-brands fa-github text-xl"></i>
              </button>
            </Link>

            <Link to="https://join.skype.com/invite/y7omFqWIgyF1">
              <button className="btn  btn-sm md:btn-md btn-circle btn-outline mx-1 btn-warning">
                <i className="fa-brands fa-skype text-xl"></i>
              </button>
            </Link>
          </div>
        </aside>

        <nav>
          <header className="footer-title text-yellow-500">My Location</header>
          <p>
            Block-G, Mirpur-2, Dhaka-1216 <br />
            Bangladesh{" "}
          </p>
        </nav>
        <nav>
          <header className="footer-title text-yellow-500">My Email</header>
          <p>shamimamirpur2@gmail.com</p>
        </nav>
        <nav>
          <header className="footer-title text-yellow-500">Cpontact Me</header>
          <p>+8801642567554</p>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-black text-base-content">
        <aside>
          <p className="text-slate-200" >Copyright © 2023 - All right reserved by Shamima</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
