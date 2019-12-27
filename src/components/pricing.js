import React, { Component } from "react"
import Bootstrap, { Carousel, BImg, Button } from "react-bootstrap"

/*Resources */
import Check from "../images/check.svg"
import Prof from "../images/prof.svg"

export default class Pricing extends Component {
  render() {
    return (
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>Prices</h2>
              <p>Compatible package options for all kind of businesses.</p>
            </div>
          </div>
          <div className="row div-relative">
            <div className="col-md-4 col-sm-12">
              <div className="box-container essential">
                <div className="header">
                  <h1>Essential</h1>
                </div>
                <div className="p-content">
                  <span>
                    <h1>
                      <span className="dollar">&#36;</span>17.99
                    </h1>
                    <p>Per vehicle / month</p>
                  </span>
                  <p>
                    Everything you need to plan and
                    <br /> dispatch optimized routes
                  </p>
                  <div className="bottom">
                    <Button className="ctrl-standard fx-sliderIn">
                      Try for Free
                    </Button>
                    <p>No Credit Card Requiered.</p>
                  </div>
                </div>
                <div className="p-features">
                  <div className="item">
                    <img src={Check} />
                    <p>Easily import orders</p>
                  </div>
                  <div className="item">
                    <img src={Check} />
                    <p>Plan optimized routes in minutes</p>
                  </div>
                  <div className="item">
                    <img src={Check} />
                    <p>Dispatch routes to driver app</p>
                  </div>
                </div>
                
              </div>
              
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="box-container prof">
                <div className="header">
                  <h1>Professional</h1>
                </div>
                <img className="marginleft" src={Prof} />
                <div className="p-content">
                  <span>
                    <h1>
                      <span className="dollar">&#36;</span>24.99
                    </h1>
                    <p>Per vehicle / month</p>
                  </span>
                  <p>
                    Scale your delivery operations with <br />
                    driver management tools
                  </p>
                  <div className="bottom">
                    <Button className="ctrl-standard fx-sliderIn">
                      Try for Free
                    </Button>
                    <p>No Credit Card Requiered.</p>
                  </div>
                </div>
                <div className="p-features">
                  <div className="item">
                    <img src={Check} />
                    <p>Track drivers' progress</p>
                  </div>
                  <div className="item">
                    <img src={Check} />
                    <p>Capture signatures as proof of delivery</p>
                  </div>
                  <div className="item">
                    <img src={Check} />
                    <p>
                      Customer Notifications available for an additional $19 USD
                    </p>
                  </div>
                </div>
              </div>
              <p></p>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="box-container prem ">
                <div className="header">
                  <h1>Premium</h1>
                </div>
                <div className="p-content">
                  <span>
                    <h2 className="custom-price">Custom</h2>
                    <p></p>
                  </span>
                  <p>
                    For growing businesses that need
                    <br /> custom support
                  </p>
                  <div className="bottom">
                    <Button className="ctrl-standard fx-sliderIn">
                      Try for Free
                    </Button>
                    <p>No Credit Card Requiered.</p>
                  </div>
                </div>
                <div className="p-features">
                  <div className="item">
                    <img src={Check} />
                    <p>Easily import orders</p>
                  </div>
                  <div className="item">
                    <img src={Check} />
                    <p>Plan optimized routes in minutes</p>
                  </div>
                  <div className="item">
                    <img src={Check} />
                    <p>
                      Customer Notifications available for an additional $19 USD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
