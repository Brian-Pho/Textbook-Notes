import React from "react"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import PostToc from "../components/post/postToc"
import PostContent from "../components/post/postContent"
import { MarkdownType } from "../utils/graphqlTypes"

const About = () => {
  const data: MarkdownType = useStaticQuery(graphql`
    query {
      markdownRemark(
        frontmatter: { layout: { eq: "page" }, title: { eq: "About" } }
      ) {
        html
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
      <PostToc />
    </Layout>
  )
}

export default About
