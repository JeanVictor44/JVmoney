import styled from "styled-components";

export const Grid = styled.section `
  display:grid;
  padding:2.5rem;
  grid-template-columns:repeat(2, 1fr);
  grid-template-rows: repeat(2,1fr);
  gap:1rem;
`