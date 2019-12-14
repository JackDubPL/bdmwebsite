import React, {Component} from 'react'
import styled from '@emotion/core'


class SectionSlider extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        
    }
    
    render() {
        return this.props.children;
    }
}

export default SectionSlider;