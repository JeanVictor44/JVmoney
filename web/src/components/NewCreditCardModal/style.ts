import styled from "styled-components";

export const Container = styled.form `
  h2 {
    margin-bottom:2rem;
    font-size:1.5rem;
  }
  input {
    background:#E7E9EE;
    border:1px solid #D7D7D7;
    padding:0 1.5rem;
    height:4rem;
    border-radius:0.25rem;  
    width:100%;
    
  }
  & > input {
      margin-top:1rem;
  }
  button[type="submit"] {
    height:4rem;
    width:100%;
    margin-top:1.5rem;
    border:none;
    color:#FFF;
    background-color:var(--green);
    font-weight:600;
    font-size:1rem;
    transition: filter 0.2s;
    &:hover {
      filter:brightness(0.9);
    }
  }
`
export const ContainerLastInputs = styled.div `
  display:flex;
  gap:0.55rem;
  margin-top:1rem;
  
`