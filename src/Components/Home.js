import "./Home.css";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const Home = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      xaxis: {
        categories: ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "49%"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [23, 29, 58, 75, 33, 20, 73, 49],
      },
    ],
  });
  return (
    <div className="home">
      <div className="leftSide">
        <div className="leftSideHeader">
          <span className="material-icons" id="add">
            add_box
          </span>
          <span className="material-icons" id="dots">
            more_horiz
          </span>
          <span id="celcius">{"\u00B0"}c</span>
          <span className="material-icons" id="toggle">
            toggle_off
          </span>
          <span id="fahernite">{"\u00B0"}F</span>
        </div>
        <div className="leftSideBody">
          <div className="cityHolder">
            <span className="material-icons" id="nearme">
              near_me
            </span>
            <span id="city">Mysuru,Karnataka,India</span>
            <span className="material-icons" id="wb_twilight">
              wb_twilight
            </span>
            <span id="riseTime">06:30</span>
          </div>
          <div className="dateTimeHolder">
            <span id="date">Today 16 sept</span>
            <span className="material-icons" id="wb_twilight_2">
              wb_twilight
            </span>
            <span id="setTime">16:03</span>
          </div>
          <div className="temperatureHolder">
            <span className="material-icons" id="leftArrow">
              chevron_left
            </span>
            <span id="temperature">21{"\u00B0"}</span>

            <span className="material-icons" id="rightArrow">
              navigate_next
            </span>
          </div>
          <div className="iconSunnyHolder">
            <span class="material-symbols-outlined" id="iconrainy">
              rainy
            </span>
            <span id="iconRainyText">Rainy</span>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="rightSideHeader">
          <span>
            Welcome Back Thejas !<br />
            <span>Check Out How is Weather Today</span>
          </span>
          <div className="profileContainer">
            <span className="material-icons" id="profileDots">
              more_horiz
            </span>
            <span className="material-icons" id="profilePotrait">
              portrait
            </span>
          </div>
        </div>
        <div className="rightSideBody">
          <div className="rightSideBodyHeader">
            <span>Upcoming Hours</span>
            <div className="rightSideHeaderButtonsContainer">
              <span id="iconRain">
                Rain Preciptation
                <span className="material-icons" id="rainArrowDown">
                  keyboard_arrow_down
                </span>
              </span>
              <span id="iconNextDay">
                Next Day
                <span className="material-icons" id="iconNextSideArrow">
                  navigate_next
                </span>
              </span>
            </div>
          </div>
          <div className="weatherChart">
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="900"
              height="200"
            />
          </div>
        </div>
        <div className="weatherDetailsHolder">
          <span id="weatherDetailsTitle">More Details Of Today's Weather</span>
        </div>
        <div className="weatherDetailsContainer1">
          <span className="weatherCard">
            <span id="humidity">
              <span>Humidity</span>
              <span className="material-icons">water_drop</span>
            </span>
            <span id="humidityPercentage">82%</span>
            <span>
              <progress
                className="progress is-info"
                value="30"
                max="100"
                id="humidityProgressBar"
              >
                45%
              </progress>
            </span>
          </span>
          <span className="weatherCard">
            <span id="wind">
              <span> Wind</span>
              <span className="material-icons">air</span>
            </span>
            <div className="semiCircleProgressionBar"></div>
            <span id="windSpeed">8km/hr</span>
          </span>
          <span className="weatherCard">
            <span id="preciptation">
              <span>Preciptation</span>
              <span className="material-icons">cloudy_snowing</span>
            </span>
            <span id="precipitationValue">1.4 cm</span>
            <progress
              className="progress is-info"
              value="20"
              max="100"
              id="preciptationProgressBar"
            >
              45%
            </progress>
          </span>
        </div>
        <div className="weatherDetailsContainer2">
          <div className="weatherCard">
            <span id="uvIndex">
              <span>UV Index</span>
              <span className="material-icons">wb_sunny</span>
            </span>
            <span>
              <span id="uvIndexValue">4 </span>
              <span>Medium</span>
            </span>
            <span>
              <progress
                className="progress is-info"
                value="20"
                max="100"
                id="uvIdexProgressBar"
              >
                45%
              </progress>
            </span>
          </div>
          <div className="weatherCard">
            <span id="feelsLike">
              <span>Feels like</span>
              <span className="material-icons">thermostat</span>
            </span>
            <span id="feelsLikeDegree">30{"\u00B0"}</span>
            <span>
              <progress
                className="progress is-info"
                value="45"
                max="100"
                id="feelsLikeProgressBar"
              >
                45%
              </progress>
            </span>
          </div>
          <div className="weatherCard">
            <span id="chanceOfRain">
              <span>Chance of rain</span>
              <span className="material-icons">thunderstorm</span>
            </span>
            <span id="chanceOfRainPercentage">42%</span>
            <span>
              <progress
                className="progress is-info"
                value="45"
                max="100"
                id="chanceOfRainProgressBar"
              >
                45%
              </progress>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
