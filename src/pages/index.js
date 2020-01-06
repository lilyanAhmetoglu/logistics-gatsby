import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnchorLink from "react-anchor-link-smooth-scroll"
/* Landing page sections */
import Promo from "../components/Promo"
import Features from "../components/features"
import Journey from "../components/journey"
import Team from "../components/team"
import Contact from "../components/contact"
import Pricing from "../components/pricing"
import Product from "../components/product"
import Testimonial from "../components/testimonial"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Promo />
    <Features />
    <Journey />
    <Team />
    <Product />
    <Contact />
  </Layout>
)

export default IndexPage
