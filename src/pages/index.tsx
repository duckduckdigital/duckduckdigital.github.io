import { graphql, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { MarkdownRemark } from "../graphql-types"
import { Stack } from "@chakra-ui/react"
import Hero from "../components/hero"
import Brands from "../components/Brands"
import Services from "../components/Services"
import About from "../components/About"

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Stack spacing={12}>
        <Hero />
        <Brands />
        <Services />
        <About />
        {/* <Stack spacing={4}>
          <Heading as={"h4"} size={"md"}>
            Updates
          </Heading>
          {posts.map(({ node }: { node: MarkdownRemark }) => (
            <Card node={node} />
          ))}
        </Stack> */}
      </Stack>
    </Layout>
  )
}

export default BlogIndex
