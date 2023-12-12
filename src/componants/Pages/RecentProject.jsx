import { Link } from "react-router-dom";

const RecentProject = () => {
  return (
    <div
      className="bg-cover  overflow-hidden bg-fixed"
      style={{ backgroundImage: "url( https://i.ibb.co/qk9Cg2z/lamp.jpg )" }}
    >
      <div className="my-12 mx-12  ">
        <h1
          className="font-display text-white text-lg 
        md:text-2xl lg:text-4xl pb-20 pt-8 text-center"
        >
          Recent Pro
          <span className="text-yellow-500">jects</span>
        </h1>

        <div className="flex justify-center items-center">
          <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <Link to='https://github.com/shamima-akter20/Cibo-store-client'>
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body items-center text-center border-4 border-yellow-500">
                  <i className="fa-solid fa-burger text-5xl text-yellow-500"></i>
                  <h1 className="text-2xl font-bold">Cibo</h1>
                </div>
              </div>
            </Link>

            <Link to='https://github.com/shamima-akter20/Real-Estate-discovery'>
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body items-center text-center border-4 border-yellow-500">
                  <i className="fa-solid fa-building-columns  text-5xl text-yellow-500 "></i>
                  <h1 className="text-2xl font-bold">
                    Real Estate Discoveries
                  </h1>
                </div>
              </div>
            </Link>

            <Link to='https://github.com/shamima-akter20/JobIn-client'>
              <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body items-center text-center border-4 border-yellow-500">
                  <i className="fa-solid fa-briefcase text-5xl text-yellow-500 "></i>
                  <h1 className="text-2xl font-bold">JobIn</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
