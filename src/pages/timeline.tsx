import React from "react"
import Layout from "../components/layout/layout"
import Col from "react-bootstrap/Col"
import PostTimeline from "../components/postTimeline/postTimeline"

const Timeline = () => {
  return (
    <Layout activePage="Timeline">
      <Col md={6} xs={12} className="p-md-4 p-xl-5">
        <h1>Timeline</h1>
        <PostTimeline />
      </Col>
    </Layout>
  )
}

export default Timeline
