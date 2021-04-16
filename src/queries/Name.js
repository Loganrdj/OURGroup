import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          person {
            name
          }
        }
      }
    }
  `)
  return <div>{data.site.siteMetadata.person.name}</div>
}

export default ComponentName

