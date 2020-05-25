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
      xs={0}
      className="post-toc position-sticky d-flex flex-column justify-content-start p-4"
    >
      <div className="p-4">
        <h5 className="toc-header">Contents</h5>
        <Nav
          className="bs-docs-sidebar"
          dangerouslySetInnerHTML={{ __html: toc }}
        />
      </div>
    </Col>
  )
}

export default PostToc
