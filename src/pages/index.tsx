import React from "react"
import Layout from "../components/layout/layout"
import PostList from "../components/postList/postList"

const Homepage = () => {
  return (
    <Layout activePage="Home">
      <PostList />
    </Layout>
  )
}

export default Homepage
