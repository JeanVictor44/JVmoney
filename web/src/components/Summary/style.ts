import styled from "styled-components";

export const Container = styled.div `
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:2rem;
`
export const Card = styled.div `
  background:var(--shape);
  padding:1.5rem 2rem;
  border-radius:0.25rem;
  color:var(--text-title);
  
  &.highlitght-background {
      background-color: var(--green);
      color:#FFF;
  }
  
  header {
      display:flex;
      justify-content: space-between;
  }
  strong {
      display:block;
      margin-top:1rem;
      font-size:2rem;
      font-weight:500;
      line-height: 3rem;
      &.input-color {
        color:var(--green);
      }
      &.output-color {
        color:var(--red);
      }
  }
`