import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'


const pageContent = {
    footerText: 'mail:&nbsp;kontakt@bigdaymovies.pl, tel.:&nbsp;(+48)&nbsp;729&nbsp;193&nbsp;420',
}

export default (props) => (
    <>
        <Global 
            styles={css`
                html, body {
                    max-width: 100%;
                    overflow-x: hidden;
                    overflow-y: ${props.isMenuOpen && 'hidden' }
                }

                ${props.pageWrapperSelector} {
                    max-width: 100%;
                    transform: ${props.isMenuOpen && 'translateX(-70%)'};
                    transition: .5s;
                }
            `}
        />

        <MenuWrapper isMenuOpen={props.isMenuOpen}>
            <Menu>
                <LinkList>
                    <li><Link to="/onas">O nas</Link></li>
                    <li><Link to="/oferta">Oferta</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                </LinkList>
                <MenuFooterText dangerouslySetInnerHTML={{ __html: pageContent.footerText}} />
            </Menu>
        </MenuWrapper>
    </>
)


const MenuWrapper = styled.div`
    position: sticky;
    top: 0;
`
const Menu = styled.nav`
    position: absolute;
    right: 0;
    transform: translateX(100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100vh;
    padding: 30px;
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

const MenuFooterText = styled.div`
    font-size: .8rem;
    color: #999;
    margin-top: 1rem;
    text-align: center;
`