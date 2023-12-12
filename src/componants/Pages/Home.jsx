import { Helmet } from "react-helmet-async";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import MySkill from "./MySkill";
import RecentProject from "./RecentProject";
import Services from "./Services";
import AboutLink from "./aboutLink";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SHAMIMA - Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <AboutLink></AboutLink>
      <Services></Services>
      <RecentProject></RecentProject>
      <MySkill></MySkill>
    </div>
  );
};

export default Home;
