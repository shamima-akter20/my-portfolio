

const Card = () => {
    return (
        <div className="">
            
            {/* <div className="top-8 left-2 z-10 relative bg-black  h-20 w-20 rounded-full">
             
              <button className="relative top-2 left-2 btn btn-lg btn-circle btn-outline  btn-warning">
                <i className="fa-solid fa-code text-2xl"></i>
              </button>
            </div> */}
            <div className=" absolute card w-full bg-base-300 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Frontend Development</h2>
                <p>
                  Crafting engaging user interfaces with React.js for responsive
                  and dynamic web applications. Elevate your online presence
                  with visually stunning designs and seamless user experiences.
                  Let us bring your ideas to life!
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          
        </div>
    );
};

export default Card;