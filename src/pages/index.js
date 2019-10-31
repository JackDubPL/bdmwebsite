import React from "react"
import { Helmet } from "react-helmet"
import styled from "@emotion/styled"

import { Link } from "gatsby"

import Box from "@material-ui/core/Box"
import Container from '@material-ui/core/Container'

import Layout from "../components/layout"
import VideoBg from "../components/videobg"
import VideoBgFile from "../assets/bdm-bg.mp4"

export default ({ data }) => (

        <div className="page-content">
            <Helmet>
                <title>{data.site.siteMetadata.shortTitle}{pageContent.seo.pageTitleSeparator ? pageContent.seo.pageTitleSeparator : ''}{pageContent.seo.pageTitle ? pageContent.seo.pageTitle : ''}</title>
            </Helmet>

            <Layout>
                <IntroSection display="flex" alignItems="center" flexDirection="column">
                    <VideoBg poster="/bdm-bg-poster.jpg" url={VideoBgFile} overlayColor="rgba(0,0,0,.67)" />
                    <SloganContainer display="flex" justifyContent="center" flexDirection="column">
                        <p className="slogan__top">{pageContent.intro.sloganTop}</p>
                        <p className="slogan">{pageContent.intro.slogan}</p>
                        <StyledLink to={pageContent.intro.btn.url}><i>{pageContent.intro.btn.icon}</i> {pageContent.intro.btn.text}</StyledLink>
                    </SloganContainer>
                </IntroSection>
            </Layout>
        </div>
)

export const data = graphql`
    query {
        site {
            siteMetadata {
                shortTitle
            }
        }
    }
`

const pageContent = {
    seo: {
        pageTitle: 'filmownaie eventów, relacje wideo, filmy ślubne, reportaże | Piła Szczecin',
        pageTitleSeparator: ' - ',
    },
    
    youtubeBackground: {
        videoId: 'Zx9-rinILHE',
        videoOverlay: 'rgba(0,0,0,.8)',
    },

    intro: {
        sloganTop: 'Zachowaj tę chwilę',
        slogan: 'na zawsze!',
        btn: {
            visible: true,
            text: 'Nasze historie',
            url: '#',
            icon: '',
        }
    }
}

const IntroSection = styled(Box)`
    position: relative;
    width: 100%;
    height: 95vh;
    color: #fff;
    text-align: center;
`

const SloganContainer = styled(Box)`
    padding-top: 130px;
    height: 100%;

    
    .slogan__top {
        font: normal 2.2rem/150% 'Sacramento', sans-serif;
        margin: 0;
    }
    
    .slogan {
        font: bold 3rem/120% 'Open Sans', sans-serif;
        text-transform: uppercase;
        letter-spacing: 5px;
        margin: 0;
    }
`

const StyledLink = styled(Link)`
    position: relative;
    margin: 6vh auto 0;
    color: #fff;
    padding: 8px 16px;
    letter-spacing: 2px;
    font-weight: light;
    background: rgba(255,255,255,.05);
    border: 1px solid #fff;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    box-shadow: 0px 6px 9px rgba(0,0,0,.15);
    transition: .5s;

    &:hover {
        box-shadow: 0px 6px 18px rgba(0,0,0,.3)
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 100%;
        background: linear-gradient(45deg, rgba(240, 210, 0, 0.1), rgba(130, 3, 158, 0.25));
        transition: 2s;
    }

    &:hover::after {
        width: 100%;
        transition: .5s;
    }
`