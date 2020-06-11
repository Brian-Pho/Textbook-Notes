import React, { useEffect } from "react"
import "./postToc.scss"
import Col from "react-bootstrap/Col"
import tocbot from "tocbot"

const tocClassName = "toc"
export const tocContentClassName = "toc-content"

const PostToc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: `.${tocClassName}`,
      contentSelector: `.${tocContentClassName}`,
      headingSelector: "h1, h2, h3",
      hasInnerContainers: true,
    })
  }, [])

  return (
    <Col
      xl={3}
      className="post-toc position-sticky d-none d-xl-flex flex-column justify-content-start p-xl-5"
    >
      <h5 className="toc-header">Contents</h5>
      <div className={tocClassName} />
    </Col>
  )
}

export default PostToc
