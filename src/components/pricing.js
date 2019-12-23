import React, { Component } from "react"
import Bootstrap, { Carousel, BImg ,Button} from "bootstrap-4-react"

/*Resources */
import Check from '../images/check.svg'
export default class Pricing extends Component {
  render() {
    return (
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>Prices</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box-container">
                <div className="header">
                  <h1>Essential</h1>
                </div>
                <div className="p-content">
                  <span>
                  <h1><span className="dollar">&#36;</span>17.99</h1>
                    <p>Per vehicle / month</p>
                  </span>
                  <p>
                    Everything you need to plan and dispatch optimized routes
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
                    <img src={Check}/>
                    <p>Easily import orders</p>
                  </div>
                  <div className="item">
                    <img src={Check}/>
                    <p>Plan optimized routes in minutes</p>
                  </div>
                  <div className="item">
                    <img src={Check}/>
                    <p>Dispatch routes to driver app</p>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    )
  }
}
