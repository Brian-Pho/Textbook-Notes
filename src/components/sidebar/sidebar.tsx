import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Nav from "react-bootstrap/Nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAt, faMoon } from "@fortawesome/free-solid-svg-icons"
import "./sidebar.scss"
import Col from "react-bootstrap/Col"

const SIDEBAR_ICON_SIZE = "lg"

export interface Menu {
  label: string
  path: string
}

interface SidebarProps {
  activePage: string
}

const Sidebar = (props: SidebarProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          menu {
            label
            path
          }
          author {
            name
            github
          }
        }
      }
    }
  `)

  const { title, description, menu, author } = data.site.siteMetadata

  return (
    <Col
      md={3}
      xs={12}
      className="sidebar d-flex flex-column justify-content-end position-sticky p-4"
    >
      <div className="p-4">
        <div className="header">
          <Link className="site-title" to="/">
            {title}
          </Link>
          <div className="site-desc mb-4">{description}</div>
        </div>
        <div className="menu">
          <Nav
            variant="pills"
            defaultActiveKey={props.activePage}
            className="flex-column"
          >
            {menu.map((item: Menu, index: number) => {
              return (
                <Nav.Link href={item.path} key={index} className="mt-2 mb-2">
                  {item.label}
                </Nav.Link>
              )
            })}
          </Nav>
        </div>
        <div className="buttons d-flex justify-content-around mt-4 mb-4">
          <a href="/">
            <FontAwesomeIcon icon={faMoon} size={SIDEBAR_ICON_SIZE} />
          </a>
          <a href={`https://github.com/${author.github}`}>
            <FontAwesomeIcon icon={faGithub} size={SIDEBAR_ICON_SIZE} />
          </a>
          <a href="mailto:brainic777@gmail.com">
            <FontAwesomeIcon icon={faAt} size={SIDEBAR_ICON_SIZE} />
          </a>
        </div>
      </div>
    </Col>
  )
}

export default Sidebar
