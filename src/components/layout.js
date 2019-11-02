import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import Navigation from "./navigation"

import Box from '@material-ui/core/Box'

export default (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        shortTitle
                    }
                }
            }
        `
    )

    return (
        <div className={props.addtionalClassName} id="page-wrap">

            <Helmet>
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://bigdaymovies.pl/" />
            </Helmet>

            <Global
                styles={css`
                    *, *::after, *::before {
                        box-sizing: border-box;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }

                    ::selection {
                        background-color: #922fb6;
                        color: #fff;
                    }

                    body {
                        font-family: 'Open Sans', sans-serif;
                        font-size: 16px;
                        margin: 0;
                    }
                `}
            />

            <PageContainer display="flex">
                <StyledHeader className="page-header">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <LogoLink to="/">
                            <Logo src="/bdm-logo.png" alt={data.site.siteMetadata.shortTitle + " - logo"}/>
                        </LogoLink>
                        <Navigation pageWrapperSelector="#page-wrap"/>
                    </Box>
                </StyledHeader>
                <StyledMain className="page-content">
                    {props.children}
                </StyledMain>
                <footer className="page-footer">

                </footer>
            </PageContainer>

        </div>
    )
}

const PageContainer = styled(Box)`
    position: relative;
    margin: 15px;

    &::before {
        content: '';
        z-index: -1;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 300px;
        background: linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,0));
    }
`

const StyledMain = styled.main`
    width: 100%;
`

const Logo = styled.img`
    width: 200px;
`
const LogoLink = styled(Link)`
    margin: 0 auto;
`

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    margin: 0;
    padding: 0 3rem;
    z-index: 10;

    &::after {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 1px solid rgba(255,255,255,.15);
        box-shadow: 0px 1px 3px rgba(0,0,0,.3);
    }
`