import React, { Component } from "react"
import { Button } from "react-bootstrap"
export default class Team extends Component {
  render() {
    return (
      <section className="team ">
        <div className="truck">
          <div className="container">
            <div className="row desktop">
              <div className="col-md-6">
                <div className="left-text">
                  <p>
                    There is a very big technology team working for you behind
                    the QLogistics!
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-text">
                  <p className="marginbottom5">
                    We are a team that touches every part of the technology
                    requierments such as Machine Learning, Artifical
                    Intelligence, Reinforcement Learning, UI/UX Design and more.{" "}
                  </p>
                  <Button className="ctrl-standard fx-sliderIn">
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
                    There is a very big technology team working for you behind
                    the QLogistics!
                  </p>
                </div>
                <div className="right-text">
                  <p className="marginbottom5">
                    We are a team that touches every part of the technology
                    requierments such as Machine Learning, Artifical
                    Intelligence, Reinforcement Learning, UI/UX Design and more.{" "}
                  </p>
                </div>
                <Button className="ctrl-standard fx-sliderIn">
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
