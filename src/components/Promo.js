import React, { Component } from "react"
import { Button } from "react-bootstrap"
import Modal from "react-awesome-modal"
import { Link } from "gatsby"
import Lottie from "react-lottie"
import animationData from "../components/animation"
import { useHistory } from "react-router-dom"
/* Resources*/
import Road from "../images/road.png"
import Watch from "../images/watch.svg"
import RoadMobile from "../images/mobile-road.png"
import Video from "./video"
export default class Promo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  openModal() {
    this.setState({
      visible: true,
    })
  }

  closeModal() {
    this.setState({
      visible: false,
    })
  }

  onClick() {
    window.location.href = "https://app.qlogistics.io/"
  }
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
        <div className="  desktop">
          <div className="svgContainer" id="svgContainer">
            <Lottie options={defaultOptions} isClickToPauseDisabled />
          </div>
        </div>
        <div className="container">
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
                    <Button
                      onClick={this.onClick}
                      className="ctrl-standard fx-sliderIn block"
                      my="2 sm-0"
                    >
                      Get Started
                    </Button>
                    <p className="credit">Free for 7 days.</p>
                  </div>
                  <input
                    type="button"
                    value=" Watch video"
                    onClick={() => this.openModal()}
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          visible={this.state.visible}
          width="700"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <Video
            videoSrcURL="https://www.youtube.com/embed/9mdQPy26hGM"
            videoTitle="Qimia Logistics.AI - Powerful Logistic Platform"
          />
        </Modal>
      </section>
    )
  }
}
