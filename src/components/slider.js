import React, { Component } from "react"
import styled from "@emotion/styled"
import { keyframes } from '@emotion/core'

import VideoBg from "../components/videobg"

const VideoSlide = props => (
    <SlideWrapper>
        <VideoBg poster={props.data.poster && props.data.poster} url={props.data.url} />
        <p className='slogan'>{props.data.slogan}</p>
        <p className='slogan slogan__second'>{props.data.sloganSecond}</p>
    </SlideWrapper>
)

// Emoji keyframes

const backgroundScaling = keyframes`
    from, to {
        background-size: 100%;
    }
    
    50% {
        background-size: 200%;
    }
`

// Styles

const SlideWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;

    .slogan {
        font-size: 2em;
        font-weight: bold;
        font-style: italic;
        margin: 0;
    }

    .slogan__second {
        color: #fff0;
        background: linear-gradient(45deg, #a14db4, #f2d82b);
        -webkit-background-clip: text;
        background-clip: text;
        padding: 0 10px;
        animation: ${backgroundScaling} 15s infinite;
    }
`

const SliderWrapper = styled.div`
    display: flex;
    height: 100%
`


class Slider extends Component {
    state = {
        autoplay: this.props.autoplay ? this.props.autoplay : false,
        interval: this.props.interval ? this.props.interval : '5000',
    }
    
    render() {
        return (
            <SliderWrapper>
                { 
                    this.props.slides.map((slide, i) => (
                        <VideoSlide data={slide} key={`slide-${i}`} />
                    ))
                }
            </SliderWrapper>
        )
    }
}

export default Slider;