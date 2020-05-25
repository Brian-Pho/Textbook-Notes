import React from "react"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import PostToc from "../components/post/postToc"
import PostContent from "../components/post/postContent"

interface AboutType {
  markdownRemark: {
    frontmatter: {
      title: string
    }
    fields: {
      slug: string
    }
    tableOfContents: string
    headings: {
      id: string
      value: string
    }[]
    html: string
  }
}

const About = () => {
  const data: AboutType = useStaticQuery(graphql`
    query {
      markdownRemark(
        frontmatter: { layout: { eq: "page" }, title: { eq: "About" } }
      ) {
        frontmatter {
          title
        }
        html
        tableOfContents
        headings {
          id
          value
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
      {page.tableOfContents ? (
        <PostToc toc={page.tableOfContents} headings={page.headings} />
      ) : null}
    </Layout>
  )
}

export default About
