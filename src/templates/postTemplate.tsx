import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import PostContent from "../components/post/postContent"
import PostToc from "../components/post/postToc"

interface PostTemplateProps {
  data: {
    markdownRemark: {
      html: string
      tableOfContents: string
      timeToRead: number
      frontmatter: {
        title: string
        date: string
        categories: string[]
      }
      headings: {
        id: string
        value: string
      }[]
    }
  }
  pageContext: any
}

const PostTemplate = ({ data, pageContext }: PostTemplateProps) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout activePage="Notes">
      <PostContent post={post} previous={previous} next={next} />
      {post.tableOfContents ? (
        <PostToc toc={post.tableOfContents} headings={post.headings} />
      ) : null}
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents(absolute: false)
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
      }
      headings {
        id
        value
      }
    }
  }
`
