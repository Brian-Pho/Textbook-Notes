import React from "react"
import "katex/dist/katex.min.css"
import Col from "react-bootstrap/Col"
import "./postContent.scss"

interface PostContentProps {
  post: {
    frontmatter: {
      title: string
      date: string
    }
    html: string
  }
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <Col xl={6} md={9} xs={12} className="p-5">
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Col>
  )
}

export default PostContent
