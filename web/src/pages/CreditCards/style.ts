import styled from "styled-components";

export const Container = styled.section `
  padding:2.5rem;
  overflow:scroll;
` 
export const GridCards = styled.div `
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:2.5rem;
  padding-top:2.5rem;
  div {
    margin:0;
    cursor:pointer;
  }
` 