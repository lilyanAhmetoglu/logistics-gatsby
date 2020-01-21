import React, { Component } from "react"
import { Button } from "react-bootstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"
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
                <div className="left-text vertical-center">
                  <p>
                    We are working to turn your investment into value with our
                    expert team!
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-text ">
                  <p className="marginbottom5">
                    Highly skilled team is key for the existence and success of
                    technology companies. Our team combines academic knowledge
                    with project based problems, expert in their own areas,
                    creative, analytic and collaborative.{" "}
                  </p>
                  <AnchorLink className="nav-link " href="#contact">
                    <Button className="ctrl-standard fx-sliderIn">
                      Contact us
                    </Button>
                  </AnchorLink>
                </div>
              </div>
            </div>
            <div className="row mobile">
              <div className="col-md-12">
                <div className="left-text">
                  <p>
                    We are working to turn your investment into value with our
                    expert team!
                  </p>
                </div>
                <div className="right-text">
                  <p className="marginbottom5">
                    Highly skilled team is key for the existence and success of
                    technology companies. Our team combines academic knowledge
                    with project based problems, expert in their own areas,
                    creative, analytic and collaborative.{" "}
                  </p>
                </div>
                <AnchorLink className="nav-link " href="#contact">
                  <Button className="ctrl-standard fx-sliderIn">
                    Contact us
                  </Button>
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
