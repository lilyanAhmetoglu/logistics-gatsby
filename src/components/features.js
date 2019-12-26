import React, { Component } from "react"
import Bootstrap, { Carousel } from "react-bootstrap"

/*Resources */
import Optim from "../images/optim.svg"
import Task from "../images/tasks.svg"
import Track from "../images/tracking.svg"
import Instant from "../images/instant.svg"
import { Button } from "react-bootstrap"

export default class Features extends Component {
  render() {
    return (
      <section className="features" id="features">
        <div className="yellow-section">
          <div className="container">
            <Carousel>
              <Carousel.Item>
                <div className="row ">
                  <div className="col-md-4">
                    <p className="title">Reinforcement Learning</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text">
                      Creating optimal routes is a part of neuro-dynamic
                      programming. Reinforcement Learing is performing tasks
                      every second in order to create the best optimization.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row ">
                  <div className="col-md-4">
                    <p className="title">Reinforcement Learning</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text">
                      Creating optimal routes is a part of neuro-dynamic
                      programming. Reinforcement Learing is performing tasks
                      every second in order to create the best optimization.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row ">
                  <div className="col-md-4">
                    <p className="title">Reinforcement Learning</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text">
                      Creating optimal routes is a part of neuro-dynamic
                      programming. Reinforcement Learing is performing tasks
                      every second in order to create the best optimization.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="parallax-section">
          <div className="container">
            <div className="row">
              <div className="header">
                <h2>Features</h2>
                <p>There are lots of reasons to have QLogistics!</p>
              </div>
            </div>
            <div className="row margintop60">
              <div className="col-md-3 core-product-cards-container">
                <a className="core-product-card has-text-centered ">
                  <div className="product-icon-container">
                    <img src={Optim} className="product-icon" />
                  </div>
                  <h4 className="product-title">2X FASTER ROUTE PLANNING</h4>
                  <p className="product-description">
                    Perfectly designed dashboard makes it easy to operate and
                    customize delivery routes.{" "}
                  </p>
                </a>
              </div>
              <div className="col-md-3 core-product-cards-container">
                <a className="core-product-card has-text-centered ">
                  <div className="product-icon-container">
                    <img src={Task} className="product-icon" />
                  </div>
                  <h4 className="product-title">4X DELIVERY INCREASE</h4>
                  <p className="product-description">
                    Up to 4 times more deliveries per vehicle with perfectly
                    optimized routes.{" "}
                  </p>
                </a>
              </div>
              <div className="col-md-3 core-product-cards-container">
                <a className="core-product-card has-text-centered ">
                  <div className="product-icon-container">
                    <img src={Track} className="product-icon" />
                  </div>
                  <h4 className="product-title">%80 INCREASE PROFIT</h4>
                  <p className="product-description">
                    By Increasing deliveries per each route, fuel and time costs
                    will be reduced.{" "}
                  </p>
                </a>
              </div>
              <div className="col-md-3 core-product-cards-container">
                <a className="core-product-card has-text-centered ">
                  <div className="product-icon-container">
                    <img src={Instant} className="product-icon" />
                  </div>
                  <h4 className="product-title">%35 SHORTER ROUTES</h4>
                  <p className="product-description">
                    Up to 35% shorter routes using AI technologies such as
                    predicting traffic data.
                  </p>
                </a>
              </div>
            </div>
            <div className="row bottom">
              <Button className="ctrl-standard fx-sliderIn">Free Trial</Button>
              <p>Try for 7 days.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
