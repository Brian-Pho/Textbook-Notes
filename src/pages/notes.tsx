import React from "react"
import Nav from "react-bootstrap/Nav"
import Layout from "../components/layout/layout"
import Col from "react-bootstrap/Col"
import Tab from "react-bootstrap/Tab"
import PostsCategory from "../components/postsCategory/postsCategory"
import { graphql, useStaticQuery } from "gatsby"

const NOTE_CATEGORIES = ["Books", "Textbooks", "Papers", "Courses", "Other"]

interface NotesCategoryType {
  allMarkdownRemark: {
    totalCount: string
    edges: {
      node: {
        frontmatter: {
          title: string
          date: string
          categories: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const Notes = () => {
  const data: NotesCategoryType = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
              categories
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Create mapping of categories to posts with that category
  const categoryToPost = new Map()
  for (const category of NOTE_CATEGORIES) {
    categoryToPost.set(category, [])
  }

  // Filter all posts and add them to their respective category
  const posts = data.allMarkdownRemark.edges
  for (const post of posts) {
    if (!post.node.frontmatter.categories) {
      continue
    }

    for (const postCategory of post.node.frontmatter.categories) {
      let defaultCategory = "Other"
      const filteredPosts = categoryToPost.get(postCategory)

      if (filteredPosts !== undefined) {
        defaultCategory = postCategory
      }
      categoryToPost.get(defaultCategory).push(post)
    }
  }

  return (
    <Layout activePage="Notes">
      <Col xl={6} md={9} xs={12} className="p-4">
        <div className="p-4">
          <h1>Notes</h1>
          <Tab.Container defaultActiveKey={NOTE_CATEGORIES[0]}>
            <Nav justify variant="pills">
              {NOTE_CATEGORIES.map((category, index) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={category}>{category}</Nav.Link>
                  </Nav.Item>
                )
              })}
            </Nav>
            <Tab.Content>
              {NOTE_CATEGORIES.map((category, index) => {
                return (
                  <Tab.Pane key={index} eventKey={category}>
                    <PostsCategory posts={categoryToPost.get(category)} />
                  </Tab.Pane>
                )
              })}
            </Tab.Content>
          </Tab.Container>
        </div>
      </Col>
    </Layout>
  )
}

export default Notes
