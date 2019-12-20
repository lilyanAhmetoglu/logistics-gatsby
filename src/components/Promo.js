import React, { Component } from "react"
import { Button} from "bootstrap-4-react"

/* Resources*/
import Road from '../images/road.png'
export default class Promo extends Component {
  render() {
    return (
      <section className="promo">
        <div className="container">
          <div className="row">
              <div className="col-md-7 col-sm-12">
                <div className="text vertical-center">
                   <h1>Powerful Logistics Platform!</h1>
                   <p>QLogistics is the next generation logistics platform.</p>
                   <Button  my="2 sm-0"> Get Started</Button>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <div className="image">
                    <img src={Road}/>
                </div>
              </div>
          </div>
        </div>
      </section>
    )
  }
}
