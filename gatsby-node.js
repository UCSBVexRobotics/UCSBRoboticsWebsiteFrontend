const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    console.log(slug)

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const mechTemplate = path.resolve("src/pages/MechTeam.tsx")
  const elecTemplate = path.resolve("src/pages/elec.js")

  const templates = {
    mech: mechTemplate,
    elec: elecTemplate,
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.frontmatter.slug

    const whichTeam = slug.split("/")[1]
    const template = templates[whichTeam]

    createPage({
      path: slug,
      component: template,
      context: {
        slug: slug,
        //id: id
      },
    })
  })
}
