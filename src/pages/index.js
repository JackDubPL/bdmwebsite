import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import { StaticQuery } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { gsap} from 'gsap/dist/gsap'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

import VideoBackground from '../components/VideoBackground'

// Import SVG assets
import SvgIconFacebook from '../assets/images/icon-sm-facebook.svg'
import SvgIconYoutube from '../assets/images/icon-sm-youtube.svg'
import SvgIconInstagram from '../assets/images/icon-sm-instagram.svg'

export default class Index extends React.Component {

    componentDidMount() {
        /************* */
        /** ANIMATIONS */
        /************* */

        // This is necessary to use GSAP v3 with ScrollMagic
        ScrollMagicPluginGsap(ScrollMagic, gsap);

        // Create ScrollMagic controller
        const controller = new ScrollMagic.Controller({
            refreshInterval: 0,
        });

        // Hero parallax & other animations
        const tl = gsap.timeline({repeat: 2, repeatDelay: 1});
              tl.to( '#hero-section .hero-background video', {y: '30%', duration: 10, ease: 'none'});
              tl.to( '#hero-section .hero-slogan', {y: '-100', opacity: 0, offset: '33%', duration: 5, ease: 'slow'}, '0' );

        new ScrollMagic.Scene({
            duration: '100%',
            triggerHook: 0
        })
        .setTween(tl)
        .addIndicators()
        .addTo(controller);

        // In-out animations
        gsap.from( '#hero-section .hero-slogan', {y: '-100', duration: 2.5} );
    }

    render() {
        return (
            <StaticQuery
                query = {graphql`
                    query {
                        site {
                            siteMetadata {
                                shortTitle
                            }
                        }
                        videoBackground: file(name: {eq: "bdm-bg"}) {
                            publicURL
                        }
                        videoBackgroundPoster: file(name: {eq: "bdm-bg-poster"}) {
                            childImageSharp {
                                fluid(maxWidth: 1200, webpQuality: 65) {
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
                            <title>{data.site.siteMetadata.shortTitle} - filmowanie wesel, eventów, relacje wideo, filmy ślubne, reportaże | Piła Szczecin</title>
                        </Helmet>
        
                        <HeroSection id="hero-section" className="section" ref={this.heroSection}>
                            <VideoBackground className="hero-background" parallax poster={data.videoBackgroundPoster.childImageSharp.fluid.srcWebp} url={data.videoBackground.publicURL} overlayColor="rgba(0,0,0,.67)" />
                            <HeroSlogan className="hero-slogan">
                                <p className="hero-slogan__top">Zachowaj te chwile</p>
                                <p className="hero-slogan">na zawsze!</p>
                                <StyledLink swipe to="/oferta/">Nasze historie</StyledLink>
                            </HeroSlogan>
                        </HeroSection>
                        
                        <SocialMediaSection id="sm-section" className="section">
                            <ul className="sm-icon-container">
                                <li><a href="https://www.facebook.com/bigdaymoviespl/" title="Odwiedź nas na Facebook..." target="_blank" rel="noopener noreferrer" className="sm-icon"><SvgIconFacebook /></a></li>
                                <li><a href="https://www.youtube.com/channel/UCNjQdDdq5OPss5M7uVPlo3Q" title="Odwiedź nas na YouTube..." target="_blank" rel="noopener noreferrer" className="sm-icon"><SvgIconYoutube /></a></li>
                                <li><a href="https://www.instagram.com/" title="Odwiedź nas na Instagram..." target="_blank" rel="noopener noreferrer" className="sm-icon"><SvgIconInstagram /></a></li>
                            </ul>
                        </SocialMediaSection>
                    </>
                )} 
            />
        )
    }
}

// Styles
const HeroSection = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    min-height: 400px;
    color: #fff;
    text-align: center;    
`

const HeroSlogan = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 100px;
    height: 100%;    

    .hero-slogan__top {
        font: normal 2.2rem/150% 'Sacramento', sans-serif;
        margin: 0;

        @media (min-width: 992px) {
            font-size: 2.4rem;
        }
    }

    .hero-slogan {
        font: 600 2.8rem/120% 'Open Sans', sans-serif;
        text-transform: uppercase;
        letter-spacing: 5px;
        margin: 0;

        @media (min-width: 992px) {
            font-size: 3.2rem;
        }
    }
`

const StyledLink = styled(AniLink)`
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

    @media (min-width: 992px) {
        padding: 12px 24px;
        font-size: 1.1em;
    }

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

const SocialMediaSection = styled.section`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
    background: #fff;
    overflow: hidden;

    .sm-background-text {
        position: absolute;
        left: 20px;
        top: 0;
        font-size: 8em;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 5px;
        margin: 0;
        color: #ddd;
        cursor: default;
        z-index: 1;
    }

    .sm-icon-container {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin: 0;
        padding: 0;
        z-index: 2;

        li {
            list-style-type: none;
            margin: 10px;
        }
    }

    
    .sm-icon {
        display: flex;
        color: #ccc;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        padding: 1rem;
        border: 2px solid #ddd;
        border-radius: 50%;
        transition: .5s;

        &:hover {
            border-color: #922fb6;

            svg {
                fill: #922fb6;
            }
        }

        svg {
            fill: #aaa;
            transition: .5s;
        }
    }
`