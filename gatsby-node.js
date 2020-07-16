/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query dataJsonQuery {
      dataJson {
        data {
          name
          slug
        }
      }
    }
  `)

  data.dataJson.data.forEach(({ slug, name }) => {
    createPage({
      path: slug,
      component: path.resolve("src/templates/image-page.js"),
      context: {
        slug,
        name,
      },
    })
  })
}
