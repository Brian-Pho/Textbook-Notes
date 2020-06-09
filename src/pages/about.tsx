import React from "react"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import PostToc from "../components/post/postToc"
import PostContent from "../components/post/postContent"
import { Markdown } from "../types/graphqlQuery"

const About = () => {
  const data: Markdown = useStaticQuery(graphql`
    query {
      markdownRemark(
        frontmatter: { layout: { eq: "page" }, title: { eq: "About" } }
      ) {
        html
        tableOfContents
        timeToRead
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  `)

  const page = data.markdownRemark

  return (
    <Layout activePage="About">
      <PostContent post={page} />
      {page.tableOfContents ? <PostToc toc={page.tableOfContents} /> : null}
    </Layout>
  )
}

export default About
