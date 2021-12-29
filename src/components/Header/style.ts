import styled from 'styled-components'

export const Container = styled.header `
    background:var(--blue);
    grid-area:header;
`
export const Content = styled.div `
    max-width:1120px;
    margin:0 auto;
    padding:2rem 1rem 0rem;// usou padding para baixo para estender  
    display:flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div `
    display:flex;
    align-items:center;
    gap:15px;
`
export const LogoImage = styled.img `

`
export const LogoTitle = styled.h2 `
    color:var(--shape);
`
export const ButtonTransaction = styled.button `
    font-size:1rem;
    background-color:var(--blue-light);
    border:0;
    color:#fFFF;
    padding:0 2rem;
    border-radius:0.25rem;
    height:3rem;
    transition:filter 0.2s;
    &:hover {
        filter:brightness(0.9);
    }
`