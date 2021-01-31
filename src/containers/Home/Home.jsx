import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Project1 from "../../images/Project1.png";
import Project2 from "../../images/RM_Home.png";
import PwGenerator from "../../images/PasswordGenerator.gif";
import WeatherDash from "../../images/WeatherDashboard.png";
import Burger from "../../images/BurgerApp.png";
import WorkDay from "../../images/WorkDayScheduler.png";

const About = () => {
  return (
    <div className="backgroundImage">
      <main className="container">
        <section className="row">
          <div className="col-sm-8 backgroundWhite">
            <div className="myBox">
              <h1 className="familyTimes tealText">
                <strong>Portfolio</strong>
              </h1>
              <hr />
              {/* <!-- Added sub rows and columns to the webpage for the addition of 5 images. --> */}
              <section className="row" id="rowHeight">
                <div className="col-sm-6">
                  <Card image={Project1} title="Project: Net Time Traveler" />
                  <Link to="https://gatech55.github.io/project-1/">
                    Website Link
                  </Link>
                </div>
                <div className="col-sm-6">
                  <Card
                    image={Project2}
                    title="Project: Code Crushers: Survive The Banana"
                    description="Testing2"
                  />
                </div>
              </section>

              <section className="row" id="rowHeight">
                <div className="col-sm-6">
                  <Card
                    image={PwGenerator}
                    title="Homework: Password Generator"
                    description="Testing3"
                  />
                </div>
                <div className="col-sm-6">
                  <Card
                    image={WeatherDash}
                    title="Homework: Weather Dashboard"
                    description="Testing4"
                  />
                </div>
              </section>

              <section className="row" id="rowHeight">
                <div className="col-sm-6">
                  <Card
                    image={Burger}
                    title="Homework: Burger Consumption App"
                    description="Testing5"
                  />
                </div>
                <div className="col-sm-6">
                  <Card
                    image={WorkDay}
                    title="Homework: Work"
                    description="Testing6"
                  />
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
