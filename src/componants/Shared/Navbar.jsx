import { Link } from "react-router-dom";

const Navbar = () => {
    const navLink = <>
     <div className="text-xs md:text-base text-white  flex lg:flex-row flex-col ">
        <Link to='' className="nav pt-3 hover:text-yellow-500">Home</Link>
        <Link to='' className="nav pt-3 hover:text-yellow-500">Home</Link>
        <Link to='' className="nav pt-3 hover:text-yellow-500">Home</Link>
        <Link to='' className="nav pt-3 hover:text-yellow-500">Home</Link>
     </div>
    </>
  return (
    <div className="">
      <div className="navbar fixed z-10 md:px-20 lg:px-36 xl:px-56">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="pl-10 text-xl text-yellow-500 lg:hidden">
            <i className="fa-solid fa-bars "></i>
            </div>
            <ul
              tabIndex={0}
              className="p-4  text-center menu-sm dropdown-content mt-0 z-[1]  
              bg-white bg-opacity-90 rounded-box w-[450px] "
            >
              {navLink}
            </ul>
          </div>
          <a className="text-white text-xl md:text-2xl font-display pl-4">SHAMIMA</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
