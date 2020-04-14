import React from 'react'
import styled from '@emotion/styled'

export default props => {

    return (
        <StyledVideoContainer className={props.className} overlayColor={props.overlayColor} parallax={props.parallax}>
            <StyledVideo poster={props.poster} autoPlay muted loop>
                <source src={props.url} type='video/mp4'/>
            </StyledVideo>
        </StyledVideoContainer>
    )
}


// Styles

const StyledVideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -100;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.overlayColor ? props.overlayColor : ''};
    }
    `
    
    const StyledVideo = styled.video`
        z-index: -100;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        
        @media (min-aspect-ratio: 16/9) {
            width: 100%;
            height: auto;
        }
    `