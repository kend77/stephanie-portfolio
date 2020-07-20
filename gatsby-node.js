/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data, errors } = await graphql(`
    query DataJSONQuery {
      dataJson {
        projects {
          name
          slug
          subProjects {
            name
            slug
          }
        }
      }
    }
  `)
  if (errors) {
    throw errors
  }

  data.dataJson.projects.forEach(({ slug, name, subProjects }) => {
    if (subProjects) {
      createPage({
        path: slug,
        component: path.resolve("src/templates/special-page.js"),
        context: {
          slug,
          name,
        },
      })

      subProjects.forEach(({ slug, name }) => {
        createPage({
          path: slug,
          component: path.resolve("src/templates/image-page.js"),
          context: {
            slug,
            name,
          },
        })
      })
    } else {
      createPage({
        path: slug,
        component: path.resolve("src/templates/image-page.js"),
        context: {
          slug,
          name,
        },
      })
    }
  })
}
