import { Helmet } from "react-helmet-async";

const ContactMe = () => {
  return (
    <div>
      <Helmet>
        <title>SHAMIMA - Contact Me</title>
      </Helmet>
      <div
        className=" w-100% bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(https://i.ibb.co/TrYyYHd/d.jpg)",
        }}
      >
        <div className="pt-24 lg:pt-36 pb-12 md:pb-24">
          <div className="px-8 md:px-24 py-16 mx-8 md:mx-24 card glass bg-opacity-10 bg-white text-slate-200">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card w-full bg-neutral text-neutral-content">
                  <div className="card-body items-center text-center border-2 border-yellow-500">
                  <i className="fa-solid fa-envelope text-4xl text-yellow-500 "></i>
                   <h1>Email</h1>
                   <p className="text-sm md:text-base">shamimamirpur2@gmail.com</p>
                  </div>
                </div>
                <div className="card w-full bg-neutral text-neutral-content">
                  <div className="card-body items-center text-center border-2 border-yellow-500">
                  <i className="fa-brands fa-whatsapp text-5xl text-yellow-500 "></i>
                   <h1>What's App</h1>
                   <p>+8801642567554</p>
                  </div>
                </div>
                <div className="card w-full bg-neutral text-neutral-content">
                  <div className="card-body items-center text-center border-2 border-yellow-500">
                  <i className="fa-solid fa-phone text-4xl text-yellow-500"></i>
                   <h1>Contact Number</h1>
                   <p>+8801642567554</p>
                  </div>
                </div>
                <div className="card w-full bg-neutral text-neutral-content">
                  <div className="card-body items-center text-center border-2 border-yellow-500">
                  <i className="fa-regular fa-calendar-days text-4xl text-yellow-500"></i>
                   <h1>Response Time</h1>
                   <p>24/7</p>
                  </div>
                </div>
                <div className="card w-full bg-neutral text-neutral-content">
                  <div className="card-body items-center text-center border-2 border-yellow-500">
                  <i className="fa-solid fa-location-dot text-4xl text-yellow-500"></i>
                   <h1>Location</h1>
                   <p>Mirpur, Dhaka</p>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
