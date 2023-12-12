import { MdOutlineWebhook } from "react-icons/md";

const Services = () => {
  return (
    <div className=" px-6 md:px-10 lg:px-16 xl:px-56 pb-10">
      <h1 className="font-display text-black text-lg md:text-2xl lg:text-4xl pb-20 pt-8 text-center">
        My Sevi
        <span className="text-yellow-500">ces</span>
      </h1>

      <div className="flex justify-center ">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* --------------------------  card  1  --------------------------- */}
          <div className="relative mb-6 card w-full bg-base-100 shadow-xl border-t-4 border-r-4 border-yellow-500">
            <div className="absolute -top-12 left-6 z-10  bg-black  h-20 w-20 rounded-full">
              <button className="relative top-2 left-2 btn btn-lg btn-circle btn-outline  btn-warning">
                <i className="fa-solid fa-code text-2xl"></i>
              </button>
            </div>

            <div className="card-body">
              <h2 className="card-title">Frontend Development</h2>
              <p>
                {" "}
                Crafting engaging user interfaces with React.js for responsive
                and dynamic web applications. Elevate your online presence with
                visually stunning designs and seamless user experiences. Let us
                bring your ideas to life!
              </p>
            </div>
          </div>
          {/* --------------------------  card  2  --------------------------- */}
          <div className="relative mb-6 card w-full bg-base-100 shadow-xl border-t-4 border-r-4 border-yellow-500">
            <div className="absolute -top-12 left-6 z-10  bg-black  h-20 w-20 rounded-full">
              <button className="relative top-2 left-2 btn btn-lg btn-circle btn-outline  btn-warning">
                <i className="fa-brands fa-react text-3xl"></i>
              </button>
            </div>

            <div className="card-body">
              <h2 className="card-title">React Web Development</h2>
              <p>
                {" "}
                Elevate your digital footprint with my React web development
                expertise. From sleek user interfaces to dynamic web
                applications, I specialize in crafting engaging online
                experiences. Let us collaborate to turn your vision into a
                powerful reality through innovative React development.
              </p>
            </div>
          </div>
          {/* --------------------------  card  3  --------------------------- */}
          <div className="relative mb-6 card w-full bg-base-100 shadow-xl border-t-4 border-r-4 border-yellow-500">
            <div className="absolute -top-12 left-6 z-10  bg-black  h-20 w-20 rounded-full">
              <button className="relative top-2 left-2 btn btn-lg btn-circle btn-outline  btn-warning">
                <i className="fa-solid fa-sitemap text-2xl"></i>
              </button>
            </div>

            <div className="card-body">
              <h2 className="card-title">Component-based Architecture</h2>
              <p>
                {" "}
                Transform your web projects with my expertise in component-based
                architecture. I design reusable, scalable components for
                efficient and adaptable digital solutions. Let us build a
                foundation that evolves with your vision.
              </p>
            </div>
          </div>
          {/* --------------------------  card  4  --------------------------- */}
          <div className="relative mb-6 card w-full bg-base-100 shadow-xl border-t-4 border-r-4 border-yellow-500">
            <div className="absolute -top-12 left-6 z-10  bg-black  h-20 w-20 rounded-full">
              <button className="relative top-2 left-2 btn btn-lg btn-circle btn-outline  btn-warning">
              <i className="fa-solid fa-list-check text-2xl"></i>
              </button>
            </div>

            <div className="card-body">
              <h2 className="card-title">State Management</h2>
              <p>
                Optimize your web app's performance with my streamlined state
                management solutions. From local to global state, I ensure
                smooth data flow for a dynamic user experience. Let's elevate
                your application's responsiveness and efficiency.
              </p>
            </div>
          </div>
          {/* --------------------------  card  5  --------------------------- */}
          <div className="relative mb-6 card w-full bg-base-100 shadow-xl border-t-4 border-r-4 border-yellow-500">
            <div className="absolute -top-12 left-6 z-10  bg-black  h-20 w-20 rounded-full">
              <button className="relative top-2 left-2 btn btn-lg btn-circle btn-outline  btn-warning">
              <i className="fa-solid fa-laptop text-2xl"></i>
              </button>
            </div>

            <div className="card-body">
              <h2 className="card-title">Responsive Design</h2>
              <p>
              Crafting visually stunning and functional layouts for your web applications. I specialize in ensuring optimal user experiences across all devices. Let's make your content shine, no matter the screen size!
              </p>
            </div>
          </div>
          {/* --------------------------  card  6  --------------------------- */}
          <div className="relative mb-6 card w-full bg-base-100 shadow-xl border-t-4 border-r-4 border-yellow-500">
            <div className="absolute -top-12 left-6 z-10  bg-black  h-20 w-20 rounded-full">
              <button className="relative top-2 left-2 btn btn-lg btn-circle btn-outline text-3xl btn-warning">
              <MdOutlineWebhook />
              </button>
            </div>

            <div className="card-body">
              <h2 className="card-title">API Integration</h2>
              <p>
              Elevate your web applications with my expertise in seamless API integration. I connect your projects to external services, ensuring real-time updates and dynamic functionality. Let's enhance your digital experience through efficient API integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
