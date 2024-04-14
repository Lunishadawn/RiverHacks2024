import React from "react";
import NavBar from "../components/NavBar";
import Logo from "../images/Logo.svg";
import Particles from "../images/particles.svg";
import Girls from "../images/Girls.svg";
import "../css/Homepage.css";
import Card from "../components/Card";

const Homepage = () => {
  return (
    <>
      <div id="Nav">
        <NavBar />
      </div>
      <div id="background">
        <img src={Logo} alt="Girl PowerEd" id="Logo" />
        {/* bottom right sparkle */}
        <img src={Particles} alt="Sparkles" id="bottomrightsparkle" />
        {/* Top left sparkle */}
        <img src={Particles} alt="Sparkles" id="topleftsparkle" />
        <img src={Girls} alt="Power Girls" id="Girls" />
      </div>
      <div style={{ borderBlock: "10px solid white" }}></div>

      <div>
        <div id="Mission">
          <h1>Our Mission</h1>
          <h3 id="Moto">"Who Codes? She Codes."</h3>
          <h5>
            Girl PowerEd is dedicated to shaping the future of STEM education as
            an engaging, inclusive, and female-powered endeaver. Our mission is
            to offer a dynamic platform for young women, fostering the
            exploration of their technical curiosities through high- quality
            online workshops and mentorships opportunities offered by the
            phenomenal women in STEM we admire today!
          </h5>
        </div>

        <div id="WhatpowerEd">
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
        <div id="WorldGirlPowerEd">
          <h1>Why the World Needs Girl PowerEd</h1>
          <h5>
            Fostering the participation of girls in STEM is not only essential
            for promoting gender equality but also for driving innovation,
            economic growth, and addressing global challenges more inclusively
            and effectively.
          </h5>
        </div>
        <div id="Resources">
          <h5>
            See the rest of resources and information our all-female team worked
            hard to bring to you by browsering through our menus!
          </h5>
        </div>
      </div>
      <div>
        <h1 id="stat">Statistics</h1>

        <div id="WomenBoards">
          <h4>
            Campanies with more women on their boards outperfromed rivals by{" "}
            <span>42% higher</span> return in sales, <span>66% higher</span>{" "}
            return on invested capital, and <span>53% higher</span> return on
            equity.
          </h4>
          <h6>- Women on Boards (2011)</h6>
        </div>
        <div id="SocietyEngineers">
          <h4>
            Globally, women comprise only <span>29.2%</span> of the STEM
            workforce in 146 nations evaluated, compared to nearly{" "}
            <span>50%</span> of non-STEM occupations.
          </h4>
          <h6>- Society of Women Engineers (2023)</h6>
        </div>
      </div>
      <div id="FeaturedBlogs">
        <h1>Featured Blogs</h1>
        <div className="card">
          <div className="container">
            <h4>
              <b>Mindsweeper</b>
            </h4>
            <p>
              In this step-by step tutorial, learn how to build your own version
              of the classic Minesweeper game from scratch. From setting up the
              grind to implementing the logic behind revealing tiles and
              flagging mines, this blog post will walk you through every aspect
              of the development process.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <h4>
              <b>Tetris with javascript</b>
            </h4>
            <p>
              Unlock the secrets of game mechanics as we dissect the rules and
              gameplay elements that make Tetris a timeless classic. From
              handling user input to manging falling tetrominoes and clearing
              lines, every aspect of Teris's gameplay will be covered in detail.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <h4>
              <b>Super Mario with Unity</b>
            </h4>
            <p>
              Learn the fundamentals of game design as we break down the iconic
              elements that define the super Mario experience.From designing
              captivating levels to controlling player movement and implementing
              enemy AI,{" "}
            </p>
          </div>
        </div>
      </div>

      <div id="MeetMentors">
        <h1>Meet the Mentors </h1>

        <div className="card" id="Mleft">
          <h4>
            <b>Blossom</b>
          </h4>
          <br />
          <p>Major/Degree</p>
          <p>short bio</p>
        </div>
        <div className="card" id="Mmiddle">
          <h4>
            <b>Bubbles</b>
          </h4>
          <br />
          <p>Major/Degree</p>
          <p>short bio</p>
        </div>
        <div className="card" id="Mright">
          <h4>
            <b>Buttercup</b>
          </h4>
          <br />
          <p>Major/Degree</p>
          <p>short bio</p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
