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
                  <Card
                    image={Project1}
                    title="Project: Net Time Traveler"
                    Website="https://gatech55.github.io/project-1/"
                    GitHub="https://github.com/GaTech55/project-1"
                  />
                </div>
                <div className="col-sm-6">
                  <Card
                    image={Project2}
                    title="Project: Code Crushers: Survive The Banana"
                    Website="https://limitless-bastion-03523.herokuapp.com/"
                    GitHub="https://github.com/GaTech55/code-crushers-survive-the-banana-force"
                  />
                </div>
              </section>

              <section className="row" id="rowHeight">
                <div className="col-sm-6">
                  <Card
                    image={PwGenerator}
                    title="Homework: Password Generator"
                    Website="https://gatech55.github.io/password-generator/"
                    GitHub="https://github.com/GaTech55/password-generator"
                  />
                </div>
                <div className="col-sm-6">
                  <Card
                    image={WeatherDash}
                    title="Homework: Weather Dashboard"
                    Website="https://gatech55.github.io/WeatherDashboard/"
                    GitHub="https://github.com/GaTech55/WeatherDashboard"
                  />
                </div>
              </section>

              <section className="row" id="rowHeight">
                <div className="col-sm-6">
                  <Card
                    image={Burger}
                    title="Homework: Burger Consumption App"
                    Website="https://polar-inlet-14628.herokuapp.com/"
                    GitHub="https://github.com/GaTech55/burger"
                  />
                </div>
                <div className="col-sm-6">
                  <Card
                    image={WorkDay}
                    title="Homework: Work Day Scheduler"
                    Website="https://gatech55.github.io/WorkDayScheduler/"
                    GitHub="https://github.com/GaTech55/WorkDayScheduler"
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
