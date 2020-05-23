import React from "react"
import Nav from "react-bootstrap/Nav"
import Layout from "../components/layout/layout"
import Col from "react-bootstrap/Col"

const NOTE_CATEGORIES = ["Books", "Textbooks", "Papers", "Courses", "Other"]

const Notes = (): JSX.Element => {
  return (
    <Layout activePage="Notes">
      <Col xl={6} md={9} xs={12} className="p-4">
        <div className="p-4">
          <h1>Notes</h1>
          <Nav justify variant="pills" defaultActiveKey={NOTE_CATEGORIES[0]}>
            {NOTE_CATEGORIES.map((category, index) => {
              return (
                <Nav.Item key={index}>
                  <Nav.Link href="/notes" eventKey={category}>
                    {category}
                  </Nav.Link>
                </Nav.Item>
              )
            })}
          </Nav>
        </div>
      </Col>
    </Layout>
  )
}

export default Notes
