import React from "react"
import Sidebar, { Menu } from "../components/sidebar/sidebar"
import { graphql, useStaticQuery } from "gatsby"

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
    <div>
      <Sidebar activePage={notesPath} />
      <h1>Notes</h1>
    </div>
  )
}

export default Notes
