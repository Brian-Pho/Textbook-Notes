import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Sidebar from "../sidebar/sidebar"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../seo/seo"
import { SiteMetadata } from "../../types/graphqlQuery"

interface LayoutProps {
  activePage: string
  article?: boolean
  children: any
}

const Layout = ({ activePage, article, children }: LayoutProps) => {
  const { site }: SiteMetadata = useStaticQuery(graphql`
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

  const activePageData = site.siteMetadata.menu.find(menuItem => {
    return menuItem.label === activePage
  })

  const activePagePath = activePageData ? activePageData.path : ""

  return (
    <Container fluid>
      <SEO isArticle={article} />
      <Row className="flex-xl-nowrap">
        <Sidebar activePage={activePagePath} />
        {children}
      </Row>
    </Container>
  )
}

export default Layout
