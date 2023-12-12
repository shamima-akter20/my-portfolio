import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Services from "./Services";
import AboutLink from "./aboutLink";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <AboutLink></AboutLink>
            <Services></Services>
        </div>
    );
};

export default Home;