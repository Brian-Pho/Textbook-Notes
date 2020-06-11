import React from "react"
import "katex/dist/katex.min.css"
import Col from "react-bootstrap/Col"
import PostNav from "./postNav"
import PostMeta from "./postMeta"
import "./postContent.scss"

export interface PostNavLink {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}

interface PostContentProps {
  post: {
    html: string
    timeToRead: number
    frontmatter: {
      title: string
      date: string
      categories: string[]
    }
  }
  previous?: PostNavLink
  next?: PostNavLink
}

const PostContent = ({ post, previous, next }: PostContentProps) => {
  return (
    <Col xl={6} md={9} xs={12} className="p-md-4 p-xl-5">
      <header>
        <h1>{post.frontmatter.title}</h1>
        <PostMeta post={post} />
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostNav previous={previous} next={next} />
    </Col>
  )
}

export default PostContent