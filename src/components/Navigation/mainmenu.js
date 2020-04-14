import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: window.scrollY,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({
                scrollPosition: window.scrollY,
            })
        });
    }
    
    render() {
        return(
            <>
                <Viewport>
                    <PageContainer isMenuOpen={this.props.isMenuOpen}>
                        <Content>
                            {this.props.children}
                        </Content>
                        <Menu css={css`margin-top: ${this.state.scrollPosition}px;`}>
                            <MenuWrapper>
                                <LinkList>
                                    <li><AniLink onClick={this.props.onClick} swipe to="/onas">O nas</AniLink></li>
                                    <li><AniLink onClick={this.props.onClick} swipe to="/oferta">Oferta</AniLink></li>
                                    <li><AniLink onClick={this.props.onClick} swipe to="/portfolio">Portfolio</AniLink></li>
                                    <li><AniLink onClick={this.props.onClick} swipe to="/kontakt">Kontakt</AniLink></li>
                                </LinkList>
                                <MenuFooterText>
                                    <p>mail:&nbsp;kontakt@bigdaymovies.pl, tel.:&nbsp;(+48)&nbsp;729&nbsp;193&nbsp;420</p>
                                </MenuFooterText>
                            </MenuWrapper>
                        </Menu>
                    </PageContainer>
                </Viewport>
            </>
        )
    }
}

const Viewport = styled.div`
    overflow-x: hidden;
`

const PageContainer = styled.div`
    width: 170vw;
    transform: ${props => props.isMenuOpen ? 'translateX(-70vw)' : 'translateX(0)'};
    transition: .5s;
`

const Content = styled.div`
    width: 100vw;
    height: 100%;
`

const Menu = styled.div`    
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;
    height: 100vh;
    min-height: 300px;
    padding: 30px;
    z-index: 100;
    transition: 1s;
`

const MenuWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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