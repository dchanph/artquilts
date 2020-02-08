import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const CraftPage = () => {
  return (
    <Layout>
      <h1>My Portfolio</h1>
      <p>
        Every quilt is built on a wish. Every quilted product uses someone's
        preloved fabric cuts.
        <Link to="/donate"> Donate a Kit </Link>
      </p>
    </Layout>
  )
}

export default CraftPage
