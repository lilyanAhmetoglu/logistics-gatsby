import React, { Component } from "react"
import { Navbar, Nav, Button, Form, Collapse,BImg} from "bootstrap-4-react"

/*Images and resources*/
import Logo from '../images/logo.png'

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
              <Nav.ItemLink href="#" active>Features</Nav.ItemLink>
              <Nav.ItemLink href="#">Journey</Nav.ItemLink>
              <Nav.ItemLink href="#">Product</Nav.ItemLink>
              <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
              <Nav.ItemLink href="#">References</Nav.ItemLink>
              <Nav.ItemLink href="#">Blog</Nav.ItemLink>
              <Nav.ItemLink href="#">Contact</Nav.ItemLink>
            </Navbar.Nav>
            <Form inline my="2 lg-0">
              <Button  my="2 sm-0">Login</Button>
            </Form>
          </Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}
