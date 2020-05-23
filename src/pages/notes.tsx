import React from "react"
import Sidebar, { Menu } from "../components/sidebar/sidebar"
import { graphql, useStaticQuery } from "gatsby"
import Nav from "react-bootstrap/Nav"
import Layout from "../components/layout/layout"
import Col from "react-bootstrap/Col"

const NOTE_CATEGORIES = ["Books", "Textbooks", "Papers", "Courses", "Other"]

const Notes = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menu {
            label
            path
          }
        }
      }
    }
  `)

  const notesPath = data.site.siteMetadata.menu.find((menuItem: Menu) => {
    return menuItem.label === "Notes"
  }).path

  return (
    <Layout activePath={notesPath}>
      <Col xl={6} md={9} xs={12} className="p-4">
        <Nav
          justify
          variant="pills"
          defaultActiveKey={NOTE_CATEGORIES[0]}
          className="p-4"
        >
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
      </Col>
    </Layout>
  )
}

export default Notes
