/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const {
    data: {
      dataJson: { projects },
    },
    errors,
  } = await graphql(`
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

  projects.forEach(({ slug, name, subProjects }) => {
    const pageAttributes = {
      path: slug,
      component: path.resolve("src/templates/image-page.js"),
      context: {
        slug,
        name,
        thumbnailDir: `${slug}/thumbnails`,
        subProjects,
      },
    }

    if (subProjects) {
      _.merge(pageAttributes, {
        context: { thumbnailDir: `${slug}/thumbnails`, subProjects },
        component: path.resolve("src/templates/expose.js"),
      })
    }

    createPage(pageAttributes)

    _.forEach(subProjects, ({ slug: subslug, name }) => {
      createPage({
        path: `${slug}/${subslug}`,
        component: path.resolve("src/templates/image-page.js"),
        context: {
          slug,
          name,
        },
      })
    })
  })
}
