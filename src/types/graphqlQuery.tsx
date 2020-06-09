export interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
      author: {
        name: string
        github: string
      }
      menu: {
        path: string
        label: string
      }[]
    }
  }
}

export interface Markdown {
  markdownRemark: {
    html: string
    tableOfContents: string
    timeToRead: number
    frontmatter: {
      title: string
      date: string
      categories: string[]
    }
    fields: {
      slug: string
    }
  }
}

export interface AllMarkdown {
  allMarkdownRemark: {
    edges: {
      node: AllMarkdownNode
    }[]
  }
}

export interface AllMarkdownNode {
  excerpt: string
  timeToRead: number
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    excerpt: string
    categories: string[]
  }
}
