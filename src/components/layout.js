import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql, StaticQuery } from 'gatsby'
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Box from '@material-ui/core/Box'

import Hamburger from "./Navigation/hamburger"
import MainMenu from "./Navigation/mainmenu"
// import Preloader from "./preloader"

class Layout extends Component {
    state = {
        isMenuOpen: false,    
    }

    handleMenuToggle = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
        });
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                    query {
                        site {
                            siteMetadata {
                                title
                                shortTitle
                            }
                        }
                    }
                `}

                render={(data) => (
                    <>
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

                        <div id="page-wrap">                
                            {/* <Preloader logoUrl="/bdm-logo.svg" /> */}
                            <MainMenu pageWrapperSelector="#page-wrap" isMenuOpen={this.state.isMenuOpen} />
                            <PageContainer display="flex" flexWrap="wrap">
                                <Header className="page-header">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <LogoLink to="/">
                                            <Logo src="/bdm-logo.svg" alt={data.site.siteMetadata.shortTitle + " - logo"}/>
                                        </LogoLink>
                                        <Hamburger onClick={this.handleMenuToggle} isMenuOpen={this.state.isMenuOpen} />
                                    </Box>
                                </Header>
                                <StyledMain className="page-content">
                                    {this.props.children}
                                </StyledMain>
                                <footer className="page-footer">
                                    
                                </footer>
                            </PageContainer>                
                        </div>
                    </>
                )} 
            />
        )   
    }
}

const PageContainer = styled(Box)`
    position: relative;
    margin: 15px;
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

const Header = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    margin: 0;
    padding: 0 3rem;
    z-index: 10;

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

    &::after {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 1px solid rgba(255,255,255,.15);
        box-shadow: 0px 1px 3px rgba(0,0,0,.3);
    }
`

export default Layout;