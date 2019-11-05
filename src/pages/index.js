import React from "react"
import { Helmet } from "react-helmet"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

import { Link } from "gatsby"

import Box from "@material-ui/core/Box"

import Layout from "../components/layout"
import VideoBg from "../components/videobg"
import Slider from "../components/slider"


export default ({ data }) => {

    // Set video URL if filename is setted
    const leadSlides = pageContent.leadSlider.map(slide => {
        if (!slide.url && slide.filename) {
            slide.url = data.allFile.edges.filter(file => file.node.name === slide.filename)[0].node.publicURL;
        }
        return slide;
    });
    
    return (
        <>
            <Helmet>
                <title>{data.site.siteMetadata.shortTitle}{pageContent.seo.pageTitleSeparator ? pageContent.seo.pageTitleSeparator : ''}{pageContent.seo.pageTitle ? pageContent.seo.pageTitle : ''}</title>
            </Helmet>

            <Layout>
                <HeroSection display="flex" alignItems="center" flexDirection="column">
                    <VideoBg poster={pageContent.videoBg.poster} url={data.allFile.edges.filter(file => file.node.name === 'bdm-bg')[0].node.publicURL} overlayColor={pageContent.videoBg.overlay} />
                    <SloganContainer display="flex" justifyContent="center" flexDirection="column">
                        <p className="slogan__top">{pageContent.hero.sloganTop}</p>
                        <p className="slogan">{pageContent.hero.slogan}</p>
                        <StyledLink to={pageContent.hero.btn.url}><i>{pageContent.hero.btn.icon}</i> {pageContent.hero.btn.text}</StyledLink>
                    </SloganContainer>
                </HeroSection>
                <StorySection>
                    <Slider slides={leadSlides} />
                    <SliderOverlay display='flex' flexDirection='column' justifyContent='space-between'>
                        <Box display='flex' justifyContent='center'>
                            <span className='slider-overlay-icon__rec'>REC</span>
                            <span className='slider-overlay-text__top'>{pageContent.leadSliderOverlay.top}</span>
                        </Box>
                        <Box display='flex' justifyContent='space-between'>
                            <span className='slider-overlay-text__left'>{pageContent.leadSliderOverlay.bttmLeft[Math.floor(Math.random() * (3 - 1)) + 1]}</span>
                            <span className='slider-overlay-text__right'>{pageContent.leadSliderOverlay.bttmRight[Math.floor(Math.random() * (3 - 1)) + 1]}</span>
                        </Box>
                    </SliderOverlay>
                </StorySection>
            </Layout>
        </>
    )
}

export const data = graphql`
    query {
        site {
            siteMetadata {
                shortTitle
            }
        },
        allFile {
            edges {
                node {
                    publicURL
                    name
                }
            }
        }
    }
`

const pageContent = {
    seo: {
        pageTitle: 'filmownaie eventów, relacje wideo, filmy ślubne, reportaże | Piła Szczecin',
        pageTitleSeparator: ' - ',
    },
    
    videoBg: {
        poster: '/bdm-bg-poster.jpg',
        overlay: 'rgba(0,0,0,.67)',
    },

    hero: {
        sloganTop: 'Zachowaj tę chwilę',
        slogan: 'na zawsze!',
        btn: {
            visible: true,
            text: 'Nasze historie',
            url: '#',
            icon: '',
        }
    },

    leadSlider: [
        {
            slogan: 'W życiu zdarzają się',
            sloganSecond: 'momenty',
            filename: 'bdm-slider-1',
            poster: '/bdm-slider-1-poster.jpg'
        },
        {
            slogan: 'Do których chcielibyśmy',
            sloganSecond: 'powrócić',
            filename: 'bdm-slider-2',
            poster: 'bdm-slider-2-poster.jpg',
            // url: '../assets/bdm-bg.mp4'
        }
    ],

    leadSliderOverlay: {
        top: '1080p   |   50fps',
        bttmLeft: [
            '1/100',
            '1/200',
            '1/50'
        ],
        bttmRight: [
            'f 1.4',
            'f 1.8',
            'f 2.0'
        ],
        color: '#fff3'
    }
}



// Emotion Keyframes

const recIconFlashing = keyframes`
    from, to {
        background: #f005;
    }

    85% {
        background: #0005;
    }
`



// Styles

const SliderOverlay = styled(Box)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    .slider-overlay-text__top,
    .slider-overlay-text__left,
    .slider-overlay-text__right {
        text-align: center;
        font-size: .88rem;
        font-weight: 600;
        font-style: italic;
        color: #888;
        margin: .8rem;
    }

    .slider-overlay-text__top {
        margin-left: auto;
        margin-right: auto;   
    }
    
    .slider-overlay-icon__rec {
        color: #f005;
        font-weight: 800;
        font-size: .6rem;
        margin: 10px;

        &:before {
            content: '';
            display: block;
            background: #f005;
            border-radius: 50%;
            margin: 0 auto 3px;
            width: .5rem;
            height: .5rem;
            animation: ${recIconFlashing} 4s ease infinite;
        }
    }
`



const StorySection = styled(Box)`
    position: relative;
    width: 100%;
    height: calc(100vh - 30px);
    min-height: 300px;
    margin-top: 15px;
`

const HeroSection = styled(Box)`
    position: relative;
    width: 100%;
    height: calc(100vh - 30px);
    min-height: 350px;
    color: #fff;
    text-align: center;
`

const SloganContainer = styled(Box)`
    padding-top: 100px;
    height: 100%;

    
    .slogan__top {
        font: normal 2.2rem/150% 'Sacramento', sans-serif;
        margin: 0;
    }
    
    .slogan {
        font: 600 2.8rem/120% 'Open Sans', sans-serif;
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