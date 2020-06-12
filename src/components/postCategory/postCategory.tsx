import React from "react"
import { Link } from "gatsby"
import ListGroup from "react-bootstrap/ListGroup"
import { PostType } from "../../utils/graphqlTypes"

interface PostCategoryProps {
  posts: {
    node: PostType
  }[]
}

const PostCategory = ({ posts }: PostCategoryProps) => {
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

          return (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between"
            >
              <Link to={slug}>{title}</Link>
              {date}
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default PostCategory
