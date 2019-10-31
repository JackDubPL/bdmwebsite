import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

export default ({ data }) => (
    <Layout>
        <div style={{ color: `teal` }}>
            <h3>Więcej o {data.site.siteMetadata.title}</h3>
            <p>Such wow. Very React!</p>
        </div>
    </Layout>
)

export const query = graphql`
    query{
        site {
            siteMetadata {
                title
            }
        }
    }
`