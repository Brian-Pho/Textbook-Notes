import React from "react"
import { PostType } from "utils/graphqlTypes"
import "./postMeta.scss"

interface PostMetaProps {
  post: PostType
}

const PostMeta = ({ post }: PostMetaProps) => {
  const hasMetadata =
    post.timeToRead && post.frontmatter.date && post.frontmatter.categories

  if (!hasMetadata) {
    return null
  }

  return (
    <small className="post-meta">
      {post.frontmatter.date} &sdot; {post.timeToRead} min read &sdot;{" "}
      {post.frontmatter.categories.join(" ")}
    </small>
  )
}

export default PostMeta
