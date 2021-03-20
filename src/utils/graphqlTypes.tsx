export interface SiteMetadataType {
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

export interface MarkdownType {
  markdownRemark: PostType
}

export interface AllMarkdownType {
  allMarkdownRemark: {
    edges: {
      node: PostType
    }[]
  }
}

export interface PostType {
  html: string
  tableOfContents: string
  timeToRead: number
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    book_authors: string
    categories: string[]
    excerpt: string
  }
}

export interface PostNavLinkType {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}
