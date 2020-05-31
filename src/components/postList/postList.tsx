import React from "react"
import { Link } from "gatsby"
import "./postList.scss"
import Col from "react-bootstrap/Col"
import Pagination from "react-bootstrap/Pagination"

export interface PostListDataType {
  postList: {
    edges: {
      node: {
        excerpt: string
        timeToRead: number
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
  currPage: number
  numPages: number
}

const PostList = ({ postList, currPage, numPages }: PostListDataType) => {
  const posts = postList.edges
  const isFirstPage = currPage === 1
  const isLastPage = currPage === numPages
  const firstPage = `/`
  const lastPage = `${numPages}`
  const prevPage = currPage - 1 === 1 ? "/" : `${currPage - 1}`
  const nextPage = `${currPage + 1}`

  return (
    <Col md={6} xs={12} className="post-list p-md-4">
      {posts.map(({ node }) => {
        const post = node
        return (
          <article key={post.fields.slug} className="p-2 p-md-4">
            <h3>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.excerpt || post.excerpt,
              }}
            />
            {post.frontmatter.date && post.frontmatter.categories ? (
              <small className="post-meta">
                {post.frontmatter.date} &sdot; {post.timeToRead} min read &sdot;{" "}
                {post.frontmatter.categories.join(" ")}
              </small>
            ) : null}
          </article>
        )
      })}
      <Pagination className="p-2 p-md-4 mb-0 justify-content-center">
        {!isFirstPage ? (
          <>
            <Pagination.First href={firstPage} />
            <Pagination.Prev href={prevPage} />
            <Pagination.Item href={prevPage}>
              {prevPage === firstPage ? "1" : prevPage}
            </Pagination.Item>
          </>
        ) : null}
        <Pagination.Item active>{currPage}</Pagination.Item>
        {!isLastPage ? (
          <>
            <Pagination.Item href={nextPage}>{nextPage}</Pagination.Item>
            <Pagination.Next href={nextPage} />
            <Pagination.Last href={lastPage} />
          </>
        ) : null}
      </Pagination>
    </Col>
  )
}

export default PostList
