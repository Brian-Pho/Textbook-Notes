import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Sidebar, { Menu } from "../sidebar/sidebar"
import { graphql, useStaticQuery } from "gatsby"

interface LayoutProps {
  activePage: string
  children: any
}

const Layout = ({ activePage, children }: LayoutProps) => {
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

  const activePageData = data.site.siteMetadata.menu.find((menuItem: Menu) => {
    return menuItem.label === activePage
  })

  const activePagePath = activePageData === undefined ? "" : activePageData.path

  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Sidebar activePage={activePagePath} />
        {children}
      </Row>
    </Container>
  )
}

export default Layout
