import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import PostContent from "../components/post/postContent"
import PostToc from "../components/post/postToc"

interface PostTemplateProps {
  data: {
    markdownRemark: any
  }
  pageContext: any
}

const PostTemplate = ({ data, pageContext }: PostTemplateProps) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout activePath="/notes/">
      <PostContent post={post} />
      <PostToc />
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
