import React, { Component } from "react"


/* Resources*/
import Starts from "../images/starts.svg"
import Quote from "../images/quote.svg"
export default class Testimonial extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      slidesPerRow: 2,
    }
    return (
      <section className="testimonial" id="references">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>Testimonials</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="row blog">
            <div className="row ">
              <div className="col-md-12">
                <div
                  id="blogCarousel"
                  className="carousel slide container-blog"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#blogCarousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#blogCarousel" data-slide-to="1"></li>
                  </ol>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="box-container">
                            <div className="top">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                              </p>
                            </div>
                            <div className="bottom">
                              <div className="left"></div>
                              <div className="right"></div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="box-container">
                            <div className="top">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                              </p>
                            </div>
                            <div className="bottom">
                              <div className="left"></div>
                              <div className="right"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item ">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="box-container">
                            <div className="top">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                              </p>
                            </div>
                            <div className="bottom">
                              <div className="left"></div>
                              <div className="right"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="box-container">
                            <div className="top">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation.
                              </p>
                            </div>
                            <div className="bottom">
                              <div className="left">
                                <img src={Starts} />
                                <div className="grey-section">

                                </div>
                              </div>
                              <div className="right">
                                <img src={Quote}/>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
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
