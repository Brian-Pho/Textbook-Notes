import React from "react"
import { withPrefix } from "gatsby"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { PostNavLinkType } from "utils/graphqlTypes"

interface PostNavButtonProps {
  link: string
  smallText: string
  postTitle: string
}

interface PostNavProps {
  previous?: PostNavLinkType
  next?: PostNavLinkType
}

const PostNavButton = ({ link, smallText, postTitle }: PostNavButtonProps) => {
  return (
    <Button variant="outline-secondary" className="w-50" href={link}>
      <small>{smallText}</small>
      <br />
      {postTitle}
    </Button>
  )
}

const PostNav = ({ previous, next }: PostNavProps) => {
  return (
    <ButtonGroup className="w-100 pt-2 pb-2">
      {previous ? (
        <PostNavButton
          link={previous.fields.slug}
          smallText="Previous"
          postTitle={previous.frontmatter.title}
        />
      ) : null}
      {next ? (
        <PostNavButton
          link={next.fields.slug}
          smallText="Next"
          postTitle={next.frontmatter.title}
        />
      ) : null}
    </ButtonGroup>
  )
}

export default PostNav
