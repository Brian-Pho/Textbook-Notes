import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Nav from "react-bootstrap/Nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import "./sidebar.scss"

interface Menu {
  label: string,
  path: string,
}

const Sidebar = (): JSX.Element => {
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
    <div className="sidebar d-flex flex-column justify-content-end
      position-fixed h-100 p-4">
      <div className="header">
        <Link className="site-title" to="/">{title}</Link>
        <div className="site-desc mb-4">{description}</div>
      </div>
      <div className="menu">
        <Nav variant="pills" defaultActiveKey="/" className="flex-column">
          {menu.map((item: Menu, index: number) => {
            return (
            <Nav.Link href={item.path} key={index} className="mt-2 mb-2">{item.label}</Nav.Link>);
          })}
        </Nav>
      </div>
      <div className="buttons mt-2 mb-2">
        <FontAwesomeIcon icon={faMoon} />
        <a href={`https://github.com/${author.github}`}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
