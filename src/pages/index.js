import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnchorLink from 'react-anchor-link-smooth-scroll'
/* Landing page sections */
import Promo from '../components/Promo'
import Features from '../components/features'
import Journey from '../components/journey'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Promo/>
    <Features id="features"/>
    <Journey/>
  </Layout>
)

export default IndexPage
