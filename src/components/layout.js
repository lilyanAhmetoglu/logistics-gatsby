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
import FooterLogo from "../images/FooterLogo.svg"
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
                    <Link>
                      <img src={LikedIn} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={Facebook} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={Twitter} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={Youtube} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mobile">
            <div className="col-md-12 ">
              <img src={FooterLogo} />
            </div>
            <div className="col-md-12">
              <div className="social">
                <ul>
                  <li>
                    <Link>
                      <img src={LikedIn} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={Facebook} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={Twitter} />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={Youtube} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
