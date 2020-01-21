import React, { Component } from "react"

import Video from "./video"
/*Resources */

export default class Features extends Component {
  render() {
    return (
      <section className="journey" id="Journey">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>Product Journey</h2>
              <p>QLogistics is the next generation logistics platform.</p>
            </div>
          </div>
          <div className="row">
            <div className="video">
              <Video
                videoSrcURL="https://www.youtube.com/embed/eNZpbeoFrDM"
                videoTitle="Qimia Logistics.AI - Powerful Logistic Platform"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
