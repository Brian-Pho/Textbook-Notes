import React from "react"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"

interface PostNavButtonProps {
  link: string
  smallText: string
  postTitle: string
}

interface PostNavProps {
  previous: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
  next: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
}

const PostNavButton = ({ link, smallText, postTitle }: PostNavButtonProps) => {
  return (
    <Button variant="outline-secondary" className="w-50" href={link}>
      <p>
        <small>{smallText}</small>
      </p>
      {postTitle}
    </Button>
  )
}

const PostNav = ({ previous, next }: PostNavProps) => {
  return (
    <ButtonGroup className="w-100 p-4">
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
