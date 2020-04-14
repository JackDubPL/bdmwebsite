import React from 'react'
import styled from '@emotion/styled'
import AniLink from "gatsby-plugin-transition-link/AniLink"


export default () => (
    <Page404Container>
        <h2 className="page404__title">Błąd 404</h2>
        <p className="page404__text">Strona nie została znaleziona</p>
        <AniLink to="/" swipe className="page404__bttn" title="Przejdź do strony głównej...">Wróć do strony głównej...</AniLink>
    </Page404Container>
)

const Page404Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 150px 20px 50px;

    .page404__title {
        font-size: 4em;
        text-transform: uppercase;
        margin-bottom: .4em;
    }

    .page404__text {
        font-size: 2em;
        margin: .4em 0 1.4em;
    }
`