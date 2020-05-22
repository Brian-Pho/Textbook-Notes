import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Nav from "react-bootstrap/Nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import "./sidebar.scss"

export interface Menu {
  label: string,
  path: string,
}

interface SidebarProps {
  activePage: string;
}

const Sidebar = (props: SidebarProps): JSX.Element => {
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
  `);

  const { title, description, menu, author } = data.site.siteMetadata;

  return (
    <div className="sidebar col-md-3 col-12 d-flex flex-column
      justify-content-end position-sticky p-4">
      <div className="header">
        <Link className="site-title" to="/">{title}</Link>
        <div className="site-desc mb-4">{description}</div>
      </div>
      <div className="menu">
        <Nav variant="pills" defaultActiveKey={props.activePage} className="flex-column">
          {menu.map((item: Menu, index: number) => {
            return (
            <Nav.Link href={item.path} key={index} className="mt-2 mb-2">{item.label}</Nav.Link>);
          })}
        </Nav>
      </div>
      <div className="buttons d-flex justify-content-center mt-4 mb-4">
        <FontAwesomeIcon icon={faMoon} />
        <FontAwesomeIcon icon={faGithub} />

        {/*<a href={`https://github.com/${author.github}`}>*/}
        {/*  <FontAwesomeIcon icon={faGithub} />*/}
        {/*</a>*/}
      </div>
    </div>
  );
};

export default Sidebar;
