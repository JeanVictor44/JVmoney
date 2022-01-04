import styled from 'styled-components'

export const Container = styled.aside `
    background-color:var(--blue);
    grid-area: sidebar;
`

export const LogoImage = styled.img `
  display:block;
  width:3rem;
  margin:3rem  auto 0 auto;
` 
export const Nav = styled.nav `
    padding:4rem 1rem;
    a {
        text-decoration:none;
        display:block;
    }
    a + a {
        margin-top:2rem;
    }
    li {
        color:#FFF;
        padding:1rem;
        background-color:var(--blue-light);
        border-radius:0.25rem;
        cursor:pointer;
        transition:filter .2s;
        display:flex;
        align-items: center;
        gap:0.5rem;
        &:hover {
            filter:brightness(0.95);
        }
        img {
            width:1.5rem;
        }
    }
`