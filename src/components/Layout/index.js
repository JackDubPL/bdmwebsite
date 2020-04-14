import React from 'react'
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import LerpScroll from "../LerpScroll"
import Hamburger from "../Navigation/hamburger"
import MainMenu from "../Navigation/mainmenu"

import SvgLogo from "../../assets/images/bdm-logo.svg"
import SvgLogoFooter from "../../assets/images/bdm-logo-footer.svg"

export default class Layout extends React.Component {
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
                        },
                        footerBg: file(name: {eq: "footer-bg"}) {
                            childImageSharp {
                                fluid(maxWidth: 1200, webpQuality: 45) {
                                    src
                                    srcWebp
                                }
                            }
                        }
                    }
                `}

                render={(data) => (
                    <>
                        <Helmet>
                            <html lang="pl" />
                            <meta charSet="utf-8" />
                            <meta name="description" content="Filmowiec? Kamerzysta na wesele? To właśnie nas szukasz! Wejdź i obejrzyj nasze portfolio lub sprawdź czy jesteśmy dostępni w dniu, w którym planujesz swoją uroczystość! | Piła, Szczecin, wielkopolska" />
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
                                    scroll-behavior: smooth;
                                }

                                a {
                                    color: #8403a1;
                                    text-decoration: none;

                                    &:hover {
                                        color: #d000ff;
                                    }
                                }

                                img {
                                    max-width: 100%;
                                    max-height: 100%;
                                }

                                svg {
                                    width: 100%;
                                    height: 100%;
                                }

                                .container {
                                    display: flex;
                                    flex-wrap: wrap;
                                    width: 100%;
                                    max-width: 1170px;
                                    margin: 0 auto;
                                }
                            `}
                        />
                        <LerpScroll>
                            <MainMenu onClick={this.handleMenuToggle} isMenuOpen={this.state.isMenuOpen}>
                                <Content>
                                    <Header className="page-header">
                                        <HeaderContainer>
                                            <LogoLink swipe to="/">
                                                <Logo aria-labelledby="uniqueTitleID"/>
                                            </LogoLink>
                                            <Hamburger id="hamburger" onClick={this.handleMenuToggle} isMenuOpen={this.state.isMenuOpen} />
                                        </HeaderContainer>
                                    </Header>
                                    <StyledMain className="page-content">
                                        {this.props.children}
                                    </StyledMain>
                                    <Footer className="page-footer" css={css`background-image: url(${data.footerBg.childImageSharp.fluid.srcWebp});`}>
                                        <div className="container">
                                            <div css={css`flex-grow: 1;`} className="footer-column">
                                                <SvgLogoFooter css={css`width: 70px;`} />
                                            </div>
                                            <div css={css`flex-grow: 1;`} className="footer-column">
                                                <h4 className="footer-header">Big Day Movies</h4>
                                                <ul>
                                                    {/* <li>BigDayMovies.pl</li> */}
                                                    <li><a href="tel:+48729193420">(+48)&nbsp;729&nbsp;193&nbsp;420</a></li>
                                                    <li><a href="mailto:kontakt&commat;bigdaymoves&period;pl">kontakt@bigdaymovies.pl</a></li>
                                                    <li>64-920 Piła, Szczecin</li>
                                                </ul>
                                            </div>
                                            <div css={css`flex-grow: 1;`} className="footer-column">
                                                <h4 className="footer-header">Linki</h4>
                                                <ol>
                                                    <li><AniLink swipe to="/onas">O nas</AniLink></li>
                                                    <li><AniLink swipe to="/oferta">Oferta</AniLink></li>
                                                    <li><AniLink swipe to="/portfolio">Portfolio</AniLink></li>
                                                    <li><AniLink swipe to="/kontakt">Kontakt</AniLink></li>
                                                </ol>
                                            </div>
                                            <div css={css`flex-grow: 1; max-width:400px; margin: 0 auto;`} className="footer-column">
                                                <h4 className="footer-header">Co robimy?</h4>
                                            <p>Utrwalamy ważne dla&nbsp;Ciebie chwile na&nbsp;dłużej! Rozbimy to&nbsp;z&nbsp;pasją do&nbsp;filmu i&nbsp;do&nbsp;pięknych ujęć. Naszym celem jest wywoływać emocje jakich brakuje na&nbsp;co&nbsp;dzień!</p>
                                        </div>
                                    </div>
                                </Footer>
                                <Copyrights>
                                    <p>{new Date().getFullYear()}&nbsp;©&nbsp;BigDayMovies.pl  |  designed&nbsp;by&nbsp;<a href="https://kmbstudio.pl/" title="Przejdź do strony KMB Studio..." target="_blank" rel="noopener noreferrer">KMB&nbsp;Studio</a></p>
                                </Copyrights>
                                </Content>
                            </MainMenu>
                        </LerpScroll>
                    </>
                )} 
            />
        )   
    }
}

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
`

const StyledMain = styled.main`
    width: 100%;
`

const Logo = styled(SvgLogo)`
    width: 200px;
    height: auto;
`
const LogoLink = styled(AniLink)`
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

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Footer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;    
    width: 100%;
    color: #aaa;
    font-size: .85em;
    padding: 50px 15px;
    background-color: #3a004e;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-blend-mode: multiply;
    
    .footer-column {
        width: 100%;
        text-align: center;

        @media (min-width: 992px) {
            width: initial;
            text-align: left;
        }
    }

    .footer-header {
        color: #fff;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 2px;

        &:after {
            content: '';
            display: block;
            background: #e5bb16;
            width: 15px;
            height: 1px;
            margin: 10px auto 0;

            @media (min-width: 992px) {
                margin: 10px 0;
            }
        }
    }

    a {
        color: #aaa;
        text-decoration: none;
        line-height: 1.5em;
        padding: 10px 0;
        transition: .5s;

        @media (min-width: 992px) {
            padding: 0;
            padding-left: 0;
            padding-right: 10px;

            &:hover {
                color: #ccc;
                padding-left: 10px;
                padding-right: 0;
            }
        }
    }

    ul, ol { 
        padding: 0;
    }

    li {
        display: grid;
        list-style-type: none;
    }
`

const Copyrights = styled.div`
    text-align: center;
    width: 100%;
    padding: 10px;
    box-shadow: inset 4px 4px 10px #0003;

    p {
        color: #190321;
        font-size: .7rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin: 0;
    }

    a {
        color: #8403a1;
        text-decoration: none;
    }

`