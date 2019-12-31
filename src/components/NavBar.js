import React, { Component } from "react"
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"
/*Images and resources*/
import Logo from "../images/logo.png"
import Login from "../images/login.svg"
export default class NavBar extends Component {
  onClick() {
    window.location.href = "https://app.qlogistics.io/"
  }
  componentDidMount() {
    var btns = document.getElementsByClassName("nav-link")
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace(" active", "")
        this.className += " active"
      })
    }
  }
  render() {
    return (
      <>
        <Navbar expand="lg" className="l-navbar">
          <AnchorLink className="nav-link " href="#promo">
            <Navbar.Brand>
              <img src={Logo} />
            </Navbar.Brand>
          </AnchorLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <AnchorLink className="nav-link " href="#features">
                Features
              </AnchorLink>
              <AnchorLink className="nav-link " href="#Journey">
                Journey
              </AnchorLink>
              <AnchorLink className="nav-link " href="#product">
                Product
              </AnchorLink>
              <AnchorLink className="nav-link " href="#pricing">
                Pricing
              </AnchorLink>
              <AnchorLink className="nav-link " href="#contact">
                Contact
              </AnchorLink>
            </Nav>
            <Button
              onClick={this.onClick}
              className="ctrl-standard fx-sliderIn login button-line"
              my="2 sm-0"
            >
              <img src={Login} /> Login
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
