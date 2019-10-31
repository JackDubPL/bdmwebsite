import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'


const StyledMenuWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(100%);
    width: 70%;
    height: 100%;
    padding: 30px;
    border-radius: 3px;
    z-index: 100;
`

const LinkList = styled.ul`
    padding: 0;
    text-align: center;    

    li {
        list-style-type: none;
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: bolder;
        letter-spacing: 2px;
        color: #ddd;
        margin: 12px 0;
    }

    a {
        color: transparent;
        text-decoration: none;
        font-weight: bolder;
        background: linear-gradient(45deg, #a14db4, #f2d82b);
        background-clip: text;
        -webkit-background-clip: text;
        transition: .8s;

        &:hover {
            color: #cecece;
            transition: .2s;
        }
    }
`

const CloseButton = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20px;
    right: 20px;
    background: none;
    width: 30px;
    height: 30px;
    border: 3px solid #ccc;
    border-radius: 50%;
    outline: none;
    cursor: pointer;

    &::before,
    &::after {
        content: '';
        position: absolute;
        display: block;
        width: 80%;
        height: 2px;
        background: #ccc;
        transition: 1s;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }

    &:hover::before,
    &:hover::after {
        width: 50%;
        transition: .2s;
    }

    &:focus {
        background: #ccc;

        &::before,
        &::after {
            background: #fff;
        }
    }
`

const MenuFooterText = styled.div`
    font-size: .8rem;
    color: #999;
    margin-top: 1rem;
    text-align: center;
`

const Hamburger = styled.button`
    background: none;
    outline: none;
    border: none; 
    width: 32px;
    height: 26px;
    padding: 4px;
    cursor: pointer;

    span {
        display: block;
        position: relative;
        background: #fff;
        width: 24px;
        height: 2px;
        border: none;
        transition: .5s;
    
        &::after,
        &::before {
            content: '';
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            background: #fff;
            transition: .2s;
        }

        &::before {
            top: 6px;
        }
        &::after {
            bottom:6px;
        }
        
    }

    &:hover span::before {
        top: 8px;
    }
    &:hover span::after {
        bottom: 8px;
    }
`

const pageContent = {
    footerText: 'mail:&nbsp;kontakt@bigdaymovies.pl, tel.:&nbsp;(+48)&nbsp;729&nbsp;193&nbsp;420',
}

class Navigation extends Component {
    state = {
        isMenuOpen: false,
    }

    handleMenuToggle = () => {
        this.setState((state) => ({
            isMenuOpen: !state.isMenuOpen,
        }));
    }

    handleMenuClose = () => {
        this.setState({
           isMenuOpen: false, 
        });
    }

    render() {

        return (
            <div>
                <Global 
                    styles={css`
                        ${this.props.pageWrapperSelector} {
                            max-width: 100%;
                            transform: translateX(${this.state.isMenuOpen ? '-70%' : '0'});
                            transition: .5s;
                        }
                    `}
                />

                <Hamburger onClick={this.handleMenuToggle}>
                    <span></span>
                </Hamburger>
                <StyledMenuWrapper isMenuOpen={this.state.isMenuOpen}>
                    <CloseButton onClick={this.handleMenuClose} />
                    <LinkList>
                        <li><Link to="/onas">O nas</Link></li>
                        <li><Link to="/oferta">Oferta</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>
                    </LinkList>
                    <MenuFooterText dangerouslySetInnerHTML={{ __html: pageContent.footerText}} />
                </StyledMenuWrapper>
            </div>
        )
    }
}

export default Navigation;