import React from "react"
import { Link } from "gatsby"
import ListGroup from "react-bootstrap/ListGroup"

interface PostsCategoryProps {
  posts: {
    node: {
      frontmatter: {
        title: string
        date: string
        categories: string
      }
      fields: {
        slug: string
      }
    }
  }[]
}

const PostsCategory = ({ posts }: PostsCategoryProps) => {
  const totalCount = posts.length

  return (
    <div className="p-2 p-md-4">
      <h5>
        {totalCount} {totalCount === 1 ? "Post" : "Posts"}
      </h5>
      <ListGroup variant="flush">
        {posts.map(({ node }, index) => {
          const slug = node.fields.slug
          const { title, date } = node.frontmatter
          console.log(node.frontmatter)
          return (
            <ListGroup.Item key={index}>
              <div className="d-flex justify-content-between">
                <Link to={slug}>
                  <div>{title}</div>
                </Link>
                <div>{date}</div>
              </div>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default PostsCategory
