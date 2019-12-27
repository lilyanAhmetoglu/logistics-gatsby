import React, { Component } from "react"
import { Nav, Tab, Col, Row } from "react-bootstrap"
import Bootstrap, { Button } from "react-bootstrap"

/* Resources */
import product from "../images/product.png"
import leftProduct from "../images/mobile-product-left.png"
import rightProduct from "../images/mobile-product-right.png"
import UpLine from "../images/up-line.svg"
import DownLine from "../images/down-line.svg"

export default class Product extends Component {
  render() {
    return (
      <section className="product" id="product">
        <div className="container-fluid desktop-products">
          <div className="row">
            <div className="header">
              <h2>Product</h2>
              <p>
                Easy to use dashboard supporting ever step of delivery process.
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
                    <img className="aps" src={product} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Customer">
                    <img className="aps" src={product} />
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
                      <h2>Operating has never been easier like this!</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Driver">
                    <div className="text">
                      <h2>Operating has never been easier like this!</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Customer">
                    <div className="text">
                      <h2>Operating has never been easier like this!</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                      </p>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
                <div className="bottom">
                  <Button className="ctrl-standard fx-sliderIn">
                    Free Trial
                  </Button>
                  <p>No Credit Card Requiered</p>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </div>

        <div className="mobile">
          <div className="row">
            <div className="header">
              <h2>Product</h2>
              <p className="padding-all">
                Easy to use dashboard supporting ever step of delivery process.
              </p>
            </div>
          </div>
          <div className="row-fluid">
            <div className="text ">
              <h2 className="padding-all">Operating has never been easier like this!</h2>
              <img  src={leftProduct} />
              <p className="padding-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          <img src={UpLine} />
          <div className="row-fluid">
            <div className="text">
              <h2 className="text-right padding-all">
                Operating has never been easier like this!
              </h2>
              <img  src={rightProduct} />
              <p className="text-right padding-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          <img src={DownLine} />
          <div>
            <div className="text ">
              <h2 className="padding-all">Operating has never been easier like this!</h2>
              <img  src={leftProduct} />
              <p className="padding-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          <img src={UpLine} />
          <div className="row-fluid">
            <div className="text">
              <h2 className="text-right padding-all">
                Operating has never been easier like this!
              </h2>
              <img  src={rightProduct} />
              <p className="text-right padding-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
