import React from "react"
import { Menu } from "../components/sidebar/sidebar"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"

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
  `);

  const homePath = data.site.siteMetadata.menu.find((menuItem: Menu) => {
    return menuItem.label === "Home";
  }).path;

  return (
    <Layout activePath={homePath}>
      <div>fdsa</div>
    </Layout>
    );
};

export default Homepage;