import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./postList.scss"

interface PostNode {
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
          description: string
        }
      }
    }[]
  }
}

const PostList = () => {
  const data: PostNode = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <div className="post-list col-md-9 col-12 d-flex flex-column p-4">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title

        return (
          <article key={node.fields.slug} className="p-4">
            <h3>
              <Link to={node.fields.slug}>{title}</Link>
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
            <small>{node.frontmatter.date} &sdot; fdsa</small>
          </article>
        )
      })}
    </div>
  )
}

export default PostList
