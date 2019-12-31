import React, { Component } from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"
import Lottie from "react-lottie"
import animationData from "../components/animation"
/* Resources*/
import Road from "../images/road.png"
import Watch from "../images/watch.svg"
import RoadMobile from "../images/mobile-road.png"
export default class Promo extends Component {

  
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid",
      },
    }
    return (
      <section className="promo" id="promo">
        <div className="container">
          <div className="row desktop">
            <div className="svgContainer" id="svgContainer">
              <Lottie options={defaultOptions} isClickToPauseDisabled />
            </div>
            <div className="col-md-7 col-sm-12">
              <div className="text vertical-center">
                <h1>Powerful Logistics Platform!</h1>
                <p>QLogistics is the next generation logistics platform.</p>
                <div className="inter-active">
                  <div className="bottom">
                    <Button className="ctrl-standard fx-sliderIn" my="2 sm-0">
                      Get Started
                    </Button>
                    <p className="credit">Free for 7 days.</p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=9mdQPy26hGM&t=1s"
                    target="_blank"
                  >
                    <img src={Watch} />
                    Watch video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12"></div>
          </div>
          <div className="row mobile">
            <div>
              <div className="text vertical-center">
                <h1 className="padding-all">Powerful Logistics Platform!</h1>
                <p className="padding-all">
                  QLogistics is the next generation logistics platform.
                </p>
                <div className="image">
                  <img src={RoadMobile} />
                </div>
                <div className="inter-active">
                  <div className="bottom">
                    <Button className="ctrl-standard fx-sliderIn" my="2 sm-0">
                      Get Started
                    </Button>
                    <p className="credit">Free for 7 days.</p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=9mdQPy26hGM&t=1s"
                    target="_blank"
                  >
                    <img src={Watch} />
                    Watch video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
