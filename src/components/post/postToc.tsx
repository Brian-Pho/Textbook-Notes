import React from "react"
import "./postToc.scss"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"

interface PostTocProps {
  toc: string
  headings: {
    id: string
    value: string
  }[]
}

const PostToc = ({ toc, headings }: PostTocProps) => {
  return (
    <Col
      xl={3}
      className="post-toc position-sticky d-none d-xl-flex flex-column justify-content-start p-xl-5"
    >
      <h5 className="toc-header">Contents</h5>
      <Nav
        className="bs-docs-sidebar"
        dangerouslySetInnerHTML={{ __html: toc }}
      />
    </Col>
  )
}

export default PostToc
