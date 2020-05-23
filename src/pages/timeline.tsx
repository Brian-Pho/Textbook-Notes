import React from "react"
import Layout from "../components/layout/layout"
import Col from "react-bootstrap/Col"

const Timeline = (): JSX.Element => {
  return (
    <Layout activePage="Timeline">
      <Col md={6} xs={12} className="p-4">
        <div className="p-4">
          <h1>Timeline</h1>
          <p>INSERT TIMELINE PAGE</p>
        </div>
      </Col>
    </Layout>
  )
}

export default Timeline
