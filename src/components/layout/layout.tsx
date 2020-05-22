import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Sidebar from "../sidebar/sidebar"

// eslint-disable-next-line react/prop-types
const Layout = ({ activePath, children }): JSX.Element => {
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