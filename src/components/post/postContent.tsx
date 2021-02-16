import React from "react"
import "katex/dist/katex.min.css"
import Col from "react-bootstrap/Col"
import PostNav from "./postNav"
import PostMeta from "./postMeta"
import "./postContent.scss"
import { tocContentClassName } from "./postToc"
import { PostType, PostNavLinkType } from "utils/graphqlTypes"

interface PostContentProps {
  post: PostType
  previous?: PostNavLinkType
  next?: PostNavLinkType
}

const PostContent = ({ post, previous, next }: PostContentProps) => {
  return (
    <Col xl={6} md={9} xs={12} className="p-md-4 p-xl-5">
      <header>
        <h1>{post.frontmatter.title}</h1>
        <PostMeta post={post} />
      </header>
      <section
        className={tocContentClassName}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <PostNav previous={previous} next={next} />
    </Col>
  )
}

export default PostContent
