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
              team
            }
          }
        }
      }
    }
  `)

  const mechTemplate = path.resolve("src/pages/MechTeam.tsx")
  const elecTemplate = path.resolve("src/pages/elec.js")

  const templates = {
    mechanical: mechTemplate,
    electrical: elecTemplate,
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, team } = node.frontmatter

    const template = templates[team.toLowerCase()]

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
