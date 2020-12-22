import React from "react"
import { Link, withPrefix } from "gatsby"
import Col from "react-bootstrap/Col"
import Pagination from "react-bootstrap/Pagination"
import ListGroup from "react-bootstrap/ListGroup"
import { PostType } from "../../utils/graphqlTypes"
import PostMeta from "../post/postMeta"

interface PostListPaginationProps {
  currPage: number
  numPages: number
}

interface PostListProps extends PostListPaginationProps {
  postList: {
    edges: {
      node: PostType
    }[]
  }
}

const PostListPagination = ({
  currPage,
  numPages,
}: PostListPaginationProps) => {
  const isFirstPage = currPage === 1
  const isLastPage = currPage === numPages
  const firstPage = ""
  const lastPage = numPages
  const prevPage = currPage === 2 ? firstPage : currPage - 1
  const nextPage = currPage + 1

  return (
    <Pagination className="p-2 p-md-4 mb-0 justify-content-center">
      {!isFirstPage ? (
        <>
          <Pagination.First href={withPrefix(`/${firstPage}`)} />
          <Pagination.Prev href={withPrefix(`/${prevPage}`)} />
          <Pagination.Item href={withPrefix(`/${prevPage}`)}>
            {prevPage === firstPage ? "1" : prevPage}
          </Pagination.Item>
        </>
      ) : null}
      <Pagination.Item active>{currPage}</Pagination.Item>
      {!isLastPage ? (
        <>
          <Pagination.Item href={withPrefix(`/${nextPage}`)}>
            {nextPage}
          </Pagination.Item>
          <Pagination.Next href={withPrefix(`/${nextPage}`)} />
          <Pagination.Last href={withPrefix(`/${lastPage}`)} />
        </>
      ) : null}
    </Pagination>
  )
}

const PostList = ({ postList, currPage, numPages }: PostListProps) => {
  const posts = postList.edges

  return (
    <Col md={6} xs={12} className="p-md-4">
      <ListGroup variant="flush">
        {posts.map(({ node }, index) => {
          const post = node

          return (
            <ListGroup.Item key={index} className="p-2 p-md-4">
              <h3>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </h3>
              {post.frontmatter.excerpt}
              <br />
              <PostMeta post={post} />
            </ListGroup.Item>
          )
        })}
      </ListGroup>
      <PostListPagination currPage={currPage} numPages={numPages} />
    </Col>
  )
}

export default PostList
