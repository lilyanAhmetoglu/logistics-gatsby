import React, { Component } from "react"
import Bootstrap, { Button } from "react-bootstrap"
import Icon from "../images/mail.svg"
export default class ThankYouPage extends Component {
  onClick() {
    window.location.href = "/"
  }
  render() {
    return (
      <section className="thank">
        <div className="t-content ">
          <img src={Icon} />
          <h1>THANK YOU!</h1>
          <p>We have recieved your message!</p>
          <Button onClick={this.onClick} className="ctrl-standard fx-sliderIn">Go to Home</Button>
        </div>
      </section>
    )
  }
}
