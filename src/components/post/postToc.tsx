import React from "react"
import "./postToc.scss"
import Col from "react-bootstrap/Col"

const PostToc = () => {
  return (
    <Col xl={2} className="js-toc position-sticky pt-5">
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.css"
      />
      <script src="https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.js"></script>
      <nav id="toc" data-toggle="toc"></nav>
    </Col>
  )
}

export default PostToc
