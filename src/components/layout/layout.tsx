import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Sidebar, { NavItem } from "../sidebar/sidebar"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../seo/seo"

interface LayoutProps {
  activePage: string
  article?: boolean
  children: any
}

const Layout = ({ activePage, article, children }: LayoutProps) => {
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

  const activePageData = data.site.siteMetadata.menu.find(
    (menuItem: NavItem) => {
      return menuItem.label === activePage
    }
  )

  const activePagePath = activePageData ? activePageData.path : ""

  return (
    <Container fluid>
      <SEO article={article} />
      <Row className="flex-xl-nowrap">
        <Sidebar activePage={activePagePath} />
        {children}
      </Row>
    </Container>
  )
}

export default Layout
