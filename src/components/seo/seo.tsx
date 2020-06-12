import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import { SiteMetadataType } from "../../utils/graphqlTypes"

interface SEOProps {
  customTitle?: string
  customDesc?: string
  isArticle?: boolean
}

const SEO = ({ customTitle, customDesc, isArticle }: SEOProps) => {
  const { pathname } = useLocation()
  const { site }: SiteMetadataType = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const { title, description, siteUrl } = site.siteMetadata

  const seo = {
    title: customTitle || title,
    description: customDesc || description,
    url: `${siteUrl}${pathname}`,
    type: isArticle ? "article" : "website",
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
