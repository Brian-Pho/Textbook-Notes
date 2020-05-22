import React from "react"
import { PageProps } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Sidebar from "../sidebar/sidebar"

const Layout = ({ activePath, children }: PageProps<string>): JSX.Element => {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Sidebar activePage={activePath}/>
        {children}
      </Row>
    </Container>
  );
}

export default Layout;