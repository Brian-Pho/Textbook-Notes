import React from "react"
import "katex/dist/katex.min.css"
import Col from "react-bootstrap/Col"
import "./postContent.scss"
import PostNav from "./postNav"

interface PostContentProps {
  post: {
    frontmatter: {
      title: string
      date?: string
      categories?: string[]
    }
    html: string
  }
  previous?: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
  next?: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
}

const PostContent = ({ post, previous, next }: PostContentProps) => {
  return (
    <Col xl={6} md={9} xs={12} className="p-md-4 p-xl-5">
      <header>
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.date && post.frontmatter.categories ? (
          <p>
            {post.frontmatter.date} &sdot;{" "}
            {post.frontmatter.categories.join(" ")}
          </p>
        ) : null}
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostNav previous={previous} next={next} />
    </Col>
  )
}

export default PostContent
