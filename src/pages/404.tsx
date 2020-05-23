import React from "react"
import Layout from "../components/layout/layout"
import Col from "react-bootstrap/Col"

const NotFoundPage = (): JSX.Element => {
  return (
    <Layout activePage="">
      <Col md={6} xs={12} className="p-4">
        <div className="p-4">
          <h1>404: Page not found</h1>
          <p>
            Sorry, we&apos;ve misplaced that URL or it&apos;s pointing to
            something that doesn&apos;t exist. Head back home to try finding it
            again.
          </p>
        </div>
      </Col>
    </Layout>
  )
}

export default NotFoundPage
