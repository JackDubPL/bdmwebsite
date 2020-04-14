import React from 'react'
import styled from '@emotion/styled'
// import { gsap } from "gsap/dist/gsap"
// import ScrollMagic from 'scrollmagic'
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default class Contact extends React.Component {
    componentDidMount() {

        /** ANIMATIONS */

        // // This is necessary to use GSAP v3 with ScrollMagic
        // ScrollMagicPluginGsap(ScrollMagic, gsap);

        // // Create Scrollmagic Scene
        // const controller = new ScrollMagic.Controller();
        // new ScrollMagic.Scene({
        //     duration: '100%'
        // })
        // .setTween( gsap.to("#pinned-trigger1", {y: '100%', duration: 2, ease: 'none'}) )
        // .addIndicators()
        // .addTo(controller);
    }
    
    render() {
        return(
            <>
                <Section id="pinned-trigger1">
                    <ImageBackground />
                    <h1>Skontaktuj się!</h1>
                    <p>Some content</p>
                </Section>
                <Section>
                    <ImageBackground />
                    <h2>Cokolwiek</h2>
                </Section>
            </>
        )
    }
}

// For test only
const Section = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    color: #fff;
`

const ImageBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://s27.flog.pl/media/foto/13107485_dark-forest.jpg');
    background-size: cover;
`