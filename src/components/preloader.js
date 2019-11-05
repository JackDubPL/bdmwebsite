import React, { Component } from "react"
import styled from '@emotion/styled'

const PreloaderWrapper = styled.aside`
    display: flex;
    position: fixed;
    background: radial-gradient(#fff, #eee);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 1;
    transition: .8s;

    &.hidden {
        opacity: 0;
    }
`

const PreloaderLogo = styled.img`
    max-width: 180px;
    height: auto;
`

const PreloaderSloganContainer = styled.div`
    max-width: 180px;
    text-align: center;
`

const PreloaderSlogan = styled.p`
    font: .9rem/120% 'Impact', sans-serif;
    letter-spacing: 1px;
    color: transparent;
    background: linear-gradient(65deg, #8403a1, #f0d200);
    background-clip: text;
    -webkit-background-clip: text;
    padding: 4px 10px;
    border: 3px solid #e3e3e3;
    border-width: 3px 0;
`


class Preloader extends Component {
    state = {
        isPageLoading: true,
    }

    componentDidMount() {
        this.handlePageloaderHide();
    }

    handlePageloaderHide = () => {
        this.setState(() => ({
            isPageLoading: false,
        }));
    }

    render() {
        let logo;

        if (this.props.logoUrl) {
            logo = <PreloaderLogo src={this.props.logoUrl} alt="Logo" />
        }

        return (
            <PreloaderWrapper isPageLoading={this.state.isPageLoading} className={this.state.isPageLoading ? '' : 'hidden'}>
                {logo}
                <PreloaderSloganContainer>
                    <PreloaderSlogan>Ładujemy wspomnienia</PreloaderSlogan>
                </PreloaderSloganContainer>
            </PreloaderWrapper>
        )
    }
}

export default Preloader;
