import React, { Component } from "react"
import { Button } from "react-bootstrap"
export default class Team extends Component {
  onClick() {
    window.location.href = "https://app.qlogistics.io/"
  }
  render() {
    return (
      <section className="team ">
        <div className="truck">
          <div className="container">
            <div className="row desktop">
              <div className="col-md-6">
                <div className="left-text">
                  <p>
                    We are working to turn yout investment into value with our
                    expert team!
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-text">
                  <p className="marginbottom5">
                    Highly skilled team is key for the existence and success of
                    technology companies.Our team combines academic knowledge
                    with project based problems, expert in their own
                    areas,creative, analytic and collaborative.{" "}
                  </p>
                  <Button
                    onClick={this.onClick}
                    className="ctrl-standard fx-sliderIn"
                  >
                    Free Trial
                  </Button>
                  <p className="label">Try for 7 days.</p>
                </div>
              </div>
            </div>
            <div className="row mobile">
              <div className="col-md-12">
                <div className="left-text">
                  <p>
                    We are working to turn yout investment into value with our
                    expert team!
                  </p>
                </div>
                <div className="right-text">
                  <p className="marginbottom5">
                    Highly skilled team is key for the existence and success of
                    technology companies.Our team combines academic knowledge
                    with project based problems, expert in their own
                    areas,creative, analytic and collaborative.{" "}
                  </p>
                </div>
                <Button
                  onClick={this.onClick}
                  className="ctrl-standard fx-sliderIn"
                >
                  Free Trial
                </Button>
                <p className="label">Try for 7 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
