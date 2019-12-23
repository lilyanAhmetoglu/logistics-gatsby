import React, { Component } from "react"
import Bootstrap, { Carousel, BImg } from "bootstrap-4-react"

/*Resources */
import Optim from "../images/optim.svg"
import Task from "../images/tasks.svg"
import Track from "../images/tracking.svg"
import Instant from "../images/instant.svg"
import { Button } from "bootstrap-4-react/lib/components"

export default class Features extends Component {
  componentDidMount() {
    window.setTimeout(() => Bootstrap.carousel(), 2000)
  }
  render() {
    if (typeof window !== "undefined") {
      return (
        <section className="features" id="features">
          <div className="yellow-section">
            <div className="container">
              <Carousel w="100" id="carouselExampleControls">
                <Carousel.Inner>
                  <Carousel.Item active>
                    <div className="row ">
                      <div className="col-md-4">
                        <p className="title">Reinforcement Learning</p>
                      </div>
                      <div className="col-md-6">
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore aliqua.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-md-4">
                        <p className="title">Reinforcement Learning</p>
                      </div>
                      <div className="col-md-6">
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore aliqua.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-md-4">
                        <p className="title">Reinforcement Learning</p>
                      </div>
                      <div className="col-md-6">
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore aliqua.
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel.Inner>
                <Carousel.Next href="#carouselExampleControls">
                  <Carousel.Next.Icon />
                </Carousel.Next>
              </Carousel>
            </div>
          </div>
          <div className="parallax-section">
            <div className="container">
              <div className="row">
                <div className="header">
                  <h2>Features</h2>
                  <p>QLogistics is the next generation logistics platform.</p>
                </div>
              </div>
              <div className="row margintop60">
                <div className="col-md-3">
                  <div className="boxes">
                    <div class="flip">
                      <a>
                        <div class="front">
                          <img src={Optim} />
                          <h4>ROUTE OPTIMIZATION</h4>
                        </div>
                        <div class="back">
                          <h4>ROUTE OPTIMIZATION</h4>
                          <p>Reduce operational costs by 35%</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="boxes">
                    <div class="flip">
                      <a>
                        <div class="front">
                          <img src={Task} />
                          <h4>30.000 TASKS</h4>
                        </div>
                        <div class="back">
                          <h4>30.000 TASKS</h4>
                          <p>40% Increase in manpower utilization efficiency</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="boxes">
                    <div class="flip">
                      <a>
                        <div class="front">
                          <img src={Track} />
                          <h4>LIVE TRACKING</h4>
                        </div>
                        <div class="back">
                          <h4>LIVE TRACKING</h4>
                          <p>80% Reduction in late arrivals</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="boxes">
                    <div class="flip">
                      <a>
                        <div class="front">
                          <img src={Instant} />
                          <h4>INSTANT CHANGES</h4>
                        </div>
                        <div class="back">
                          <h4>INSTANT CHANGES</h4>
                          <p>
                            30% Increase in accuracy arrival time and customer
                            satisfaction
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bottom">
                <Button className="ctrl-standard fx-sliderIn">
                  Free Trial
                </Button>
                <p>Try for 7 days.</p>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
