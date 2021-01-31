import React from "react";
import "./About.css";
import davidPic from "../../images/davidpicture_150_150.jpg";
import resume from "../../images/DavidBrown_2020_Developer.pdf";

const Home = () => {
  return (
    <div className="backgroundImage">
      <main className="container">
        <section className="row">
          <div className="col-sm-8 backgroundWhite">
            <div className="myBox">
              <h1 className="familyTimes tealText">
                <strong>About Me</strong>
              </h1>
              <hr />
              <img
                align="left"
                className="img-fluid"
                src={davidPic}
                alt="Picture of a handsome man."
                id="aboutMe"
              />
              <p className="pull-left">
                I'm a Salesforce Business Analyst (Administrator Certified) with
                recognized strengths in reporting using Power BI, SAP Business
                Objects and Tibco Spotfire. I have ten plus years' experience in
                Healthcare Information Technology. I'm known for a deep
                technical expertise and solution-oriented approach to issues
                using knowledge gained from additional certifications in ITIL
                and Lean Six Sigma. I have a solid understanding of contract
                management, knowledge management, entitlements, and reporting. I
                am currently pursuing a&#160;
                <a href="https://bootcamp.pe.gatech.edu/coding/">
                  Georgia Institute of Technology Coding Boot Camp
                </a>
                &#160;certificate with an expected completion date of 02/2021.
              </p>

              <p>
                From a personal perspective I've lived all over the world due to
                being born and army brat. I was born in Fort Bragg, North
                Carolina and then moved to Kansas, Indiana, South Korea, Ohio,
                Canada and finally Alabama. As an All-American high school
                football player, I decided to accept a scholarship to Georgia
                Institute of Technology where I majored in Management with
                concentrations in Technology &amp; Operations. Upon graduation I
                worked for McKesson for 8 years before moving to Allscripts and
                now my current role at Ingenious Med.
              </p>

              <p>
                If you would like to learn more please view my&#160;
                <a href="https://www.linkedin.com/in/gatech55/">
                  LinkedIn profile
                </a>
                &#160;or visit my&#160;
                <a href="https://github.com/GaTech55">GitHub profile</a>. To
                directly contact me please email&#160;
                <a href="mailto:gatech55@gmail.com">GaTech55@gmail.com</a> or
                call 256-520-0003. Finally, a copy of my resume can be
                <a href={resume}>&#160;download here</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="invisible"></div>
    </div>
  );
};

export default Home;
