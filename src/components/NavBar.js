import React, { Component } from "react"
import { Navbar, Nav, Button, Form, Collapse, BImg } from "bootstrap-4-react"
import AnchorLink from "react-anchor-link-smooth-scroll"
/*Images and resources*/
import Logo from "../images/logo.png"

export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="l-navbar" expand="lg" fixed="top">
          <BImg
            src={Logo}
            height="32"
            display="inline-block"
            align="top"
            mr="1"
          />
          <Navbar.Toggler target="#navbarColor2" />
          <Collapse navbar id="navbarColor2">
            <Navbar.Nav mr="auto">
              <AnchorLink className="nav-link " href="#features">
                Features
              </AnchorLink>
              <AnchorLink className="nav-link " href="#Journey">
                Journey
              </AnchorLink>
              <AnchorLink className="nav-link " href="#">
                Product
              </AnchorLink>
              <AnchorLink className="nav-link " href="#">
                Pricing
              </AnchorLink>
              <AnchorLink className="nav-link " href="#">
                References
              </AnchorLink>
              <AnchorLink className="nav-link " href="#">
                Blog
              </AnchorLink>
              <AnchorLink className="nav-link " href="#contact">
                Contact
              </AnchorLink>
            </Navbar.Nav>
            <Form inline my="2 lg-0">
              <Button className="ctrl-standard fx-sliderIn" my="2 sm-0">
                Login
              </Button>
            </Form>
          </Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}
