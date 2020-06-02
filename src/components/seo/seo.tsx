import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title: string
  description: string
  article: boolean
}

const SEO = ({ title, description, article }: SEOProps) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          defaultUrl: siteUrl
        }
      }
    }
  `)

  const { defaultTitle, defaultDescription, defaultUrl } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${defaultUrl}${pathname}`,
    type: article ? "article" : "website",
  }

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={seo.title}
      meta={[
        { name: "description", content: seo.description },
        { name: "og:title", content: seo.title },
        { name: "og:description", content: seo.description },
        { name: "og:url", content: seo.url },
        { name: "og:type", content: seo.type },
      ]}
    />
  )
}

export default SEO

SEO.defaultProps = {
  title: null,
  description: null,
  article: false,
}
