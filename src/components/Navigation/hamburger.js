import React from 'react'
import styled from '@emotion/styled'

export default (props) => (
    <HamburgerBttn onClick={props.onClick} isMenuOpen={props.isMenuOpen}>
        <span></span>
    </HamburgerBttn>
);

const HamburgerBttn = styled.button`
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
        background: ${props => props.isMenuOpen ? 'none' : '#fff'};
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
            top: ${props => props.isMenuOpen ? '0' : '6px'};
            transform: rotate(${props => props.isMenuOpen ? '45deg' : '0'});
        }
        &::after {
            bottom: ${props => props.isMenuOpen ? '0' : '6px'};
            transform: rotate(${props => props.isMenuOpen ? '-45deg' : '0'});
        }
        
    }

    &:hover span::before {
        top: ${props => props.isMenuOpen ? '0' : '8px'};
        transform: rotate(${props => props.isMenuOpen ? '-45deg' : '0'});
    }
    &:hover span::after {
        bottom: ${props => props.isMenuOpen ? '0' : '8px'};
        transform: rotate(${props => props.isMenuOpen ? '45deg' : '0'});
    }
`