import React from "react"
import { Menu } from "../components/sidebar/sidebar"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import PostList from "../components/postList/postList"

const Homepage = (): JSX.Element => {
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

  const homePath = data.site.siteMetadata.menu.find((menuItem: Menu) => {
    return menuItem.label === "Home"
  }).path

  return (
    <Layout activePath={homePath}>
      {/*<div>fdsa</div>*/}
      <PostList />
    </Layout>
  )
}

export default Homepage
