/**
 * The Scroll LARP Component 
 * Source: https://codepen.io/osublake/pen/QqPqbN
 */

import React from 'react'
import styled from '@emotion/styled'
import gsap from 'gsap'

export default class LerpScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            target: React.createRef(),
            ease: 0.05, // <= scroll speed
            endY: 0,
            y: 0,
            resizeRequest: 1,
            scrollRequest: 0,
            requestId: null
        };
    }

    componentDidMount() {
        const target = this.state.target.current;

        gsap.to(target, {
          rotation: 0.01,
          force3D: true
        });

        this.updateScroller();  
        window.focus();
        window.addEventListener("resize", this.onResize.bind(this));
        document.addEventListener("scroll", this.onScroll.bind(this));
    }

    updateScroller() {
        const target = this.state.target.current;
        let resized = this.state.resizeRequest > 0;
            
        if (resized) {    
            var height = target.clientHeight;
            document.body.style.height = height + "px";
            this.setState({resizeRequest: 0});
        }
            
        var scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        this.setState({endY: scrollY});
        this.setState({y: this.state.y + (scrollY - this.state.y) * this.state.ease});

        if (Math.abs(scrollY - this.state.y) < 0.05 || resized) {
            this.setState({y: scrollY});
            this.setState({scrollRequest: 0});
        }
        
        gsap.to(target, { 
            y: -this.state.y 
        });
        
        this.setState({requestId: this.state.scrollRequest > 0 ? requestAnimationFrame(this.updateScroller.bind(this)) : null});
    }

    onScroll() {
        this.setState((prevState) => ({scrollRequest: prevState.scrollRequest + 1}));
        if (!this.state.requestId) {
            this.setState({requestId: requestAnimationFrame(this.updateScroller.bind(this))});
        }
    }

    onResize() {
        this.setState((prevState) =>({resizeRequest: prevState.resizeRequest + 1}));
        if (!this.state.requestId) {
            this.setState({requestId: requestAnimationFrame(this.updateScroller.bind(this))});
        }
    }

    render() {
        return(
            <>
                <ViewPort>
                    <ScrollContainer ref={this.state.target}>
                        {this.props.children}
                    </ScrollContainer>
                </ViewPort>
            </>
        )
    }
}

const ViewPort = styled.div`
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    position: fixed;
`

const ScrollContainer = styled.div`
    position: absolute;  
    overflow: hidden;
    width: 100%;
    z-index: 10;
    backface-visibility: hidden;
    transform-style: preserve-3d;
`