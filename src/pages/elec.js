import React from "react"
import { graphql } from "gatsby"
import Page from "../components/global/Page"

export default function BlogPost({ data }) {
  console.log(data)

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Page>
      <div>
        <h1>Elec Template</h1>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Page>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
