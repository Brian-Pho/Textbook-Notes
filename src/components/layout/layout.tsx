import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Sidebar from "../sidebar/sidebar"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../seo/seo"
import { SiteMetadataType } from "../../utils/graphqlTypes"

interface LayoutProps {
  activePage: string
  article?: boolean
  children: any
}

const Layout = ({ activePage, article, children }: LayoutProps) => {
  const { site }: SiteMetadataType = useStaticQuery(graphql`
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

  let activePagePath = ""

  for (const menuItem of site.siteMetadata.menu) {
    if (menuItem.label === activePage) {
      activePagePath = menuItem.path
      break
    }
  }

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
