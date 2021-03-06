import React, { Component } from "react"
import { Nav, Tab, Col, Row } from "react-bootstrap"
import Bootstrap, { Button } from "react-bootstrap"

/* Resources */
import product from "../images/product.png"
import Driver from "../images/driver.png"
import leftProduct from "../images/mobile-product-left.png"
import rightProduct from "../images/mobile-product-right.png"
import UpLine from "../images/up-line.svg"
import DownLine from "../images/down-line.svg"
import Tick from "../images/tick.svg"
import Customer from "../images/customer.png"
import CustomerMobil from "../images/customer-mobile.png"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default class Product extends Component {
  render() {
    return (
      <section className="product" id="product">
        <div className="container-fluid desktop-products">
          <div className="row">
            <div className="header">
              <h2>Product</h2>
              <p>
                Easy to use dashboard supporting every step of delivery process.
              </p>
            </div>
          </div>
          <Tab.Container id="left-tabs-example " defaultActiveKey="Operator">
            <Row>
              <Col md={6}>
                <Tab.Content>
                  <Tab.Pane eventKey="Operator">
                    <img className="aps" src={product} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Driver">
                    <img className="aps" src={Driver} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Customer">
                    <img className="aps" src={Customer} />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col md={6}>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="Operator">Operator</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Driver">Driver</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Customer">Customer</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="Operator">
                    <div className="text">
                      <h2>
                        Operating has never been
                        <br />
                        easier than this!
                      </h2>
                      <p>
                        Operating deliveries is now easy peasy. Everything is
                        under your control and cristal clear without any
                        confusion.
                      </p>
                      <ul>
                        <li>
                          <img src={Tick} />
                          <p>Perfectly optimized routes</p>
                        </li>
                        <li>
                          <img src={Tick} />
                          <p>Easy to add and change tasks</p>
                        </li>
                        <li>
                          <img src={Tick} />
                          <p>Live tracking of all vehicles</p>
                        </li>
                        <li>
                          <img src={Tick} />
                          <p>
                            Re-route optimization in seconds when you add a new
                            task
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Driver">
                    <div className="text">
                      <h2>
                        Get rid of last minute problems
                        <br />
                        on the route for the drivers.
                      </h2>
                      <p>
                        All news are good also for the drivers. No more
                        unachievable deliveries, wrong routes and traffic jams!
                      </p>
                      <ul>
                        <li>
                          <img src={Tick} />
                          <p>On time delivery</p>
                        </li>
                        <li>
                          <img src={Tick} />
                          <p>Easy task tracking from mobile device</p>
                        </li>
                        <li>
                          <img src={Tick} />
                          <p>Shortest and most accurate routes</p>
                        </li>
                        <li>
                          <img src={Tick} />
                          <p>Minimum traffic jam</p>
                        </li>
                      </ul>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Customer">
                    <div className="text">
                      <h2>
                        It’s great to keep our customers <br />
                        informed and satisfied.
                      </h2>
                      <p>
                        The success of a delivery can only be measured
                        accurately from the happiness on the customer's face.
                      </p>
                      <ul>
                        <li>
                          <img src={Tick} />
                          <p>Fast and trouble-free delivery</p>
                        </li>
                        <li>
                          <img src={Tick} />
                          <p>Live delivery track</p>
                        </li>
                        <li>
                          <img src={Tick} />
                          <p>Live support</p>
                        </li>
                        <li>
                          <img src={Tick} />
                          <p>Delivery confirmation</p>
                        </li>
                      </ul>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
                <div className="bottom">
                  <AnchorLink className="nav-link " href="#contact">
                    <Button className="ctrl-standard fx-sliderIn">
                      Contact us
                    </Button>
                  </AnchorLink>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="mobile">
          <div className="header">
            <h2>Product</h2>
            <p className="padding-all">
              Easy to use dashboard supporting every step of delivery process.
            </p>
          </div>
          <div className="row-fluid">
            <div className="text ">
              <h2 className="padding-all">
                Operating has never been easier than this!
              </h2>
              <img src={leftProduct} />
              <p className="padding-all">
                Operating deliveries is now easy peasy. Everything is under your
                control and cristal clear without any confusion.
              </p>
              <ul>
                <li>
                  <img src={Tick} />
                  <p>Perfectly optimized routes</p>
                </li>
                <li>
                  <img src={Tick} />
                  <p>Easy to add and change tasks</p>
                </li>
                <li>
                  <img src={Tick} />
                  <p>Live tracking of all vehicles</p>
                </li>
                <li>
                  <img src={Tick} />
                  <p>
                    Re-route optimization in seconds when you add a new task
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <img className="width100" src={UpLine} />
          <div className="row-fluid">
            <div className="text">
              <h2 className="text-right padding-all">
                Get rid of last minute problems on the route for the drivers.
              </h2>
              <img src={rightProduct} />
              <p className="text-right padding-all">
                All news are good also for the drivers. No more unachievable
                deliveries, wrong routes and traffic jams!
              </p>
              <ul>
                <li>
                  <img src={Tick} />
                  <p>On time delivery</p>
                </li>
                <li>
                  <img src={Tick} />
                  <p>Easy task tracking from mobile device</p>
                </li>
                <li>
                  <img src={Tick} />
                  <p>Shortest and most accurate routes</p>
                </li>
                <li>
                  <img src={Tick} />
                  <p>Minimum traffic jam</p>
                </li>
              </ul>
            </div>
          </div>
          <img className="width100" src={DownLine} />
          <div>
            <div className="text ">
              <h2 className="padding-all">
                It’s great to keep our customers informed and satisfied.
              </h2>
              <img src={CustomerMobil} />
              <p className="padding-all">
                The success of a delivery can only be measured accurately from
                the happiness on the customer's face.
              </p>
              <ul>
                <li>
                  <img src={Tick} />
                  <p>Fast and trouble-free delivery</p>
                </li>
                <li>
                  <img src={Tick} />
                  <p>Live delivery track</p>
                </li>
                <li>
                  <img src={Tick} />
                  <p>Live support</p>
                </li>
                <li>
                  <img src={Tick} />
                  <p>Delivery confirmation</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
