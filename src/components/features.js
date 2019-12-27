import React, { Component } from "react"
import Bootstrap, { Carousel } from "react-bootstrap"
import { Button } from "react-bootstrap"
/*Resources */
import Optim from "../images/optim.svg"
import Task from "../images/tasks.svg"
import Track from "../images/tracking.svg"
import Instant from "../images/instant.svg"


export default class Features extends Component {
  render() {
    return (
      <section className="features" id="features">
        <div className="yellow-section">
          <div className="container">
            <Carousel>
              <Carousel.Item>
                <div className="row desktop">
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
                <div className="row mobile">
                  <div className="col-md-12">
                    <p className="title">Reinforcement Learning</p>
                    <p className="text">
                      Creating optimal routes is a part of neuro-dynamic
                      programming. Reinforcement Learing is performing tasks
                      every second in order to create the best optimization.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row desktop">
                  <div className="col-md-4">
                    <p className="title">Artifical Intelligence</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text">
                      Optimizing the routes is more than sorting the addresses.
                      QLogistics uses AI to predict deliveries per day in each
                      specific area, traffic data and more in order to optimize
                      delivery routes.
                    </p>
                  </div>
                </div>
                <div className="row mobile">
                  <div className="col-md-12">
                    <p className="title">Artifical Intelligence</p>
                    <p className="text">
                      Optimizing the routes is more than sorting the addresses.
                      QLogistics uses AI to predict deliveries per day in each
                      specific area, traffic data and more in order to optimize
                      delivery routes.
                    </p>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="row desktop">
                  <div className="col-md-4">
                    <p className="title">Analytics & Big Data</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text">
                      Nobody wants to get drowned in the data ocean. Based on
                      analyzing big data, QLogistics gives all the accrued
                      results and creating reports using the most state of art
                      technologies.
                    </p>
                  </div>
                </div>
                <div className="row mobile">
                  <div className="col-md-4">
                    <p className="title">Analytics & Big Data</p>
                    <p className="text">
                      Nobody wants to get drowned in the data ocean. Based on
                      analyzing big data, QLogistics gives all the accrued
                      results and creating reports using the most state of art
                      technologies.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="parallax-section">
          <div className="container">
            <div className="row ">
              <div className="header">
                <h2>Features</h2>
                <p>QLogistics is the next generation logistics platform.</p>
              </div>
            </div>
            <div className="row desktop">
              <div className="col-md-3 col-sm-6 core-product-cards-container">
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
              <div className="col-md-3 col-sm-6 core-product-cards-container">
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
              <div className="col-md-3 col-sm-6 core-product-cards-container">
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
              <div className="col-md-3 col-sm-6 core-product-cards-container">
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
            <div className="row mobile">
              <div className="col-md-12">
                <div className="box-container">
                  <img src={Optim} className="product-icon" />
                  <h4 className="product-title">2X FASTER ROUTE PLANNING</h4>
                  <p className="product-description">
                    Perfectly designed dashboard makes it easy to operate and
                    customize delivery routes.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="box-container">
                  <img src={Task} className="product-icon" />
                  <h4 className="product-title">4X DELIVERY INCREASE</h4>
                  <p className="product-description">
                    Up to 4 times more deliveries per vehicle with perfectly
                    optimized routes.
                  </p>
                </div>
              </div>
              <div className="col-md-12 ">
                <div className="box-container">
                  <img src={Track} className="product-icon" />
                  <h4 className="product-title">%80 INCREASE PROFIT</h4>
                  <p className="product-description">
                    By Increasing deliveries per each route, fuel and time costs
                    will be reduced.
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="box-container">
                  <img src={Instant} className="product-icon" />
                  <h4 className="product-title">%35 SHORTER ROUTES</h4>
                  <p className="product-description">
                    Up to 35% shorter routes using AI technologies such as
                    predicting traffic data.
                  </p>
                </div>
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
