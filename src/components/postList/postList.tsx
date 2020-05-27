import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./postList.scss"
import Col from "react-bootstrap/Col"

interface PostListDataType {
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        fields: {
          slug: string
        }
        frontmatter: {
          title: string
          date: string
          excerpt: string
          categories: string[]
        }
      }
    }[]
  }
}

const PostList = () => {
  const data: PostListDataType = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "post" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
              excerpt
              categories
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <Col md={6} xs={12} className="post-list p-md-4">
      {posts.map(({ node }) => {
        return (
          <article key={node.fields.slug} className="p-2 p-md-4">
            <h3>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.excerpt || node.excerpt,
              }}
            />
            {node.frontmatter.date && node.frontmatter.categories ? (
              <small>
                {node.frontmatter.date} &sdot;{" "}
                {node.frontmatter.categories.join(" ")}
              </small>
            ) : null}
          </article>
        )
      })}
    </Col>
  )
}

export default PostList
