import React from "react"
import Layout from "../components/layout/layout"
import Col from "react-bootstrap/Col"

const About = (): JSX.Element => {
  return (
    <Layout activePage="About">
      <Col md={6} xs={12} className="p-4">
        <div className="p-4">
          <h1>About</h1>
          <p>INSERT ABOUT PAGE</p>
        </div>
      </Col>
    </Layout>
  )
}

export default About
