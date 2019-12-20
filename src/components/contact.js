import React, { Component } from "react"
import { Button } from "bootstrap-4-react/lib/components"

/*Resources */
import Tel from '../images/tel.svg'
import Mail from '../images/mail.svg'
import Address from '../images/address.svg'

export default class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>Contact Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="left-section">
                <h1>So Simple,<br/>
                So Powerful!</h1>
                <p>
                  Got a question? We are here to help! Fill up the form to get
                  in touch with us on your enquiries.
                </p>
                <div className="info">
                  <div className="detail">
                      <img src={Address}/>
                      <div className="text">
                        <h5>Address:</h5>
                        <p>8910 University. Center lane, 92122</p>
                      </div>
                  </div>
                  <div className="detail">
                  <img src={Tel}/>
                      <div className="text">
                        <h5>Phone:</h5>
                        <p>+1 (949) 394-1252</p>
                      </div>
                  </div>
                  <div className="detail">
                  <img src={Mail}/>
                      <div className="text">
                        <h5>Email:</h5>
                        <p>contact@qlogistics.io</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="right-section">
               
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
