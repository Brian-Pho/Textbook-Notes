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
          date: string
          title: string
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
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
    <Col md={6} xs={12} className="post-list p-4">
      {posts.map(({ node }) => {
        return (
          <article key={node.fields.slug} className="p-4">
            <h3>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.excerpt || node.excerpt,
              }}
            />
            <small>
              {node.frontmatter.date} &sdot;{" "}
              {node.frontmatter.categories.join(", ")}
            </small>
          </article>
        )
      })}
    </Col>
  )
}

export default PostList
