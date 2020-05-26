import React from "react"
import Layout from "../components/layout/layout"
import Col from "react-bootstrap/Col"
import PostTimeline from "../components/postTimeline/postTimeline"

const Timeline = () => {
  return (
    <Layout activePage="Timeline">
      <Col md={6} xs={12} className="p-4">
        <div className="p-4">
          <h1>Timeline</h1>
          <PostTimeline />
        </div>
      </Col>
    </Layout>
  )
}

export default Timeline
