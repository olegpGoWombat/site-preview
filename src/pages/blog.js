import React from "react"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: posts },
  } = data
  /* <pre>{JSON.stringify(data, null, 4)}</pre> */

  return (
    <div>
      <h1>Blog</h1>
      {posts.map(({ frontmatter: { title, date } }) => (
        <div>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          date
          title
        }
      }
    }
  }
`

export default Blog
