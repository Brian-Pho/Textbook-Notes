import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Sidebar from "../sidebar/sidebar"

interface LayoutProps {
  activePath: string
  children: any
}

const Layout = ({ activePath, children }: LayoutProps): JSX.Element => {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Sidebar activePage={activePath} />
        {children}
      </Row>
    </Container>
  )
}

export default Layout
