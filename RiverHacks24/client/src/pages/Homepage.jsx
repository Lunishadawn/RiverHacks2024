import React from "react";
import NavBar from "../components/NavBar";
import Heart from "../images/Hearts_background.png";
import Logo from "../images/Logo.svg";
import Particles from "../images/particles.svg";
import Girls from "../images/Girls.svg";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundColor: "#8C52FF",
          backgroundImage: `url(${Heart})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={Logo}
          alt="Girl PowerEd"
          style={{ width: "1420px", position: "relative", top: "10vh" }}
        />
        {/* bottom right sparkle */}
        <img
          src={Particles}
          alt="Sparkles"
          style={{
            width: "600px",
            position: "relative",
            right: "31vw",
            top: "40vh",
          }}
        />
        {/* Top left sparkle */}
        <img
          src={Particles}
          alt="Sparkles"
          style={{
            width: "600px",
            position: "relative",
            right: "141vw",
            bottom: "15vh",
          }}
        />

        <img
          src={Girls}
          alt="Power Girls"
          style={{
            width: "800px",
            position: "relative",
            right: "155vw",
            top: "40vh",
          }}
        />
        <h3
          style={{
            width: "400px",
            position: "relative",
            color: "white",
            right: "190vw",
            top: "112vh",
          }}
        >
          Who Codes? She Codes.
        </h3>
      </div>
          <br />
      <div
        id="Grid"
        style={{ backgroundColor: "#8C52FF", position: "relative" }}
      >
        <div
          style={{
            backgroundColor: "#CB6CE6",
            color: "white",
            width: "800px",
            position: "relative",
            left: "25vw",
            textAlign: "center",
          }}
        >
          <h1>Our Mission</h1>
          <h5>
            Girl PowerEd is dedicated to shaping the future of STEM education as
            an engaging, inclusive, and female-powered endeaver. Our mission is
            to offer a dynamic platform for young women, fostering the
            exploration of their technical curiosities through high- quality
            online workshops and mentorships opportunities offered by the
            phenomenal women in STEM we admire today!
          </h5>
        </div>

        <div
          style={{
            backgroundColor: "#5E17EB",
            color: "white",
            width: "800px",
            position: "relative",
            left: "25vw",
            textAlign: "center",
          }}
        >
          <h1>What is Girl powerEd?</h1>
          <h5>
            Girl PowerEd is a website where dedicated female mentors, actively
            engaged in STEM studies or professions, deliver live and recorded
            customized workshops focused on essential STEM skills like coding to
            young women. Embracing a nostalgic twist, projects are designed to
            infuse fun into learning. To learn more about Girl PowerEd, visit
            our “About” page.
          </h5>
        </div>
        <div
          style={{
            backgroundColor: "#CB6CE6",
            color: "white",
            width: "800px",
            position: "relative",
            left: "25vw",
            textAlign: "center",
          }}
        >
          <h1>Why the World Needs Girl PowerEd</h1>
          <h5>
            Fostering the participation of girls in STEM is not only essential
            for promoting gender equality but also for driving innovation,
            economic growth, and addressing global challenges more inclusively
            and effectively.
          </h5>
        </div>
        <div
          style={{
            backgroundColor: "#5E17EB",
            color: "white",
            width: "800px",
            position: "relative",
            left: "25vw",
            textAlign: "center",
          }}
        >
          <h5>
            See the rest of resources and information our all-female team worked
            hard to bring to you by browsering through our menus!
          </h5>
        </div>
      </div>
      <br />
    </>
  );
};

export default Homepage;
