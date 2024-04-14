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
          backgroundColor: "purple",
          backgroundImage: `url(${Heart})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={Logo} alt="Girl PowerEd" style={{ width: '1420px', position: "relative", top: "10vh"}} />
        {/* bottom right sparkle */}
         <img src={Particles} alt="Sparkles" style={{ width: "600px",  position: "relative", right: "31vw", top: '40vh'}} /> 
          {/* Top left sparkle */}
         <img src={Particles} alt="Sparkles" style={{ width: "600px",  position: "relative", right: "141vw", bottom: '15vh'}} /> 

        <img src={Girls} alt="Power Girls" style={{ width: '800px', position: "relative", right: "155vw", top: "40vh" }} /> 
      </div>
      <div>
        <div>
          <h1>Our Mission</h1>
          <p>Girl PowerEd is dedicated to shaping the future of STEM education as an engaging, inclusive, and female-powered endeaver. Our mission is to offer a dynamic platform for young women, fostering the exploration of their technical curiosities through high- quality online workshops and mentorships opportunities offered by the phenomenal women in STEM we admire today!</p>
        </div>
        <div>
          <h1>What is Girls pwerEd?</h1>
          
        </div>
      </div>
    </>
  );
};

export default Homepage;