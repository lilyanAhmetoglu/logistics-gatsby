/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

/*Resources */
import FooterLogo from "../images/FooterLogo.png"
import Facebook from "../images/facebook.svg"
import Twitter from "../images/twitter.svg"
import LikedIn from "../images/linkedin.svg"
import Youtube from "../images/youtube.svg"
/*Styles */
import "./layout.css"
import "../components/styles/styles.css"
import "../components/styles/responsive.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <footer>
        <div className="container">
          <div className="row desktop">
            <div className="col-md-4">
              <p>
                © {new Date().getFullYear()},Copyright
                {` `}
                <a href="https://www.qimia.io">Qimia GmbH</a>
              </p>
            </div>
            <div className="col-md-4 ">
              <img src={FooterLogo} />
            </div>
            <div className="col-md-4">
              <div className="social">
              <ul>
                  <li>
                    <a href="https://www.linkedin.com/company/10208976" target="_blank">
                      <img  src={LikedIn} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/Qimia.bigdata" target="_blank">
                      <img src={Facebook} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/qimiainc" target="_blank">
                      <img src={Twitter} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCtJzg2Ib74_QXKQ0ELRpigg" target="_blank"> 
                      <img src={Youtube} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mobile">
            <div className="col-md-12 ">
              <img src={FooterLogo} />
            </div>
            <hr/>
            <div className="col-md-12">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/company/10208976" target="_blank">
                      <img  src={LikedIn} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/Qimia.bigdata" target="_blank">
                      <img src={Facebook} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/qimiainc" target="_blank">
                      <img src={Twitter} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCtJzg2Ib74_QXKQ0ELRpigg" target="_blank"> 
                      <img src={Youtube} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr/>
            <div className="col-md-12">
              <p>
                © {new Date().getFullYear()},Copyright
                {` `}
                <a href="https://www.qimia.io">Qimia GmbH</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
