import styled from "styled-components";
import { darken, transparentize} from "polished";

export const Container = styled.form `
  h2 {
    margin-bottom:2rem;
    font-size:1.5rem;
    font-weight:600;
    color:var(--text-title);
  }
  input {
    background:#E7E9EE;
    border:1px solid #D7D7D7;
    display:block;
    width:100%;
    padding:0 1.5rem;
    height:4rem;
    border-radius:0.25rem;
    font-size:1rem;
    font-weight:400;
    &::placeholder {
      color:var(--text-body);
    }
    & + input {
      margin-top:1rem;

    }
  }

  [type='submit'] {
    background:var(--green);
    color:#FFF;
    border:none;
    width:100%;
    margin-top:1.5rem;
    padding:0 1.5rem;
    height:4rem;
    font-weight:600;
    font-size:1rem;
    transition: filter 0.2s;
    &:hover {
      filter:brightness(0.9);
    }
  }
`
export const TransctionTypeContainer = styled.div `
  display:flex;
  margin:1rem 0;
  gap:0.5rem;
  
`

type Colors = 'green' | 'red'
interface RadioBoxProps {
  isActive: boolean;
  activeColor:Colors;
}

const colors = {
  green:'#33cc95',
  red:'#e52e4d'
}
export const RadioBox= styled.button <RadioBoxProps> `
    display:flex;
    justify-content: center;
    align-items:center;
    gap:1rem;
    flex:1;
    padding:1.2rem;
    border:1px solid #D7D7D7;
    border-radius:0.25rem;
    transition:border-color 0.2s;
    background:${({isActive, activeColor}) => isActive ? transparentize(0.6, colors[activeColor]) : 'transaparent' };
    span {
      font-size:1rem;  
      font-weight:600;
      color:var(--text-title );
    }

    &:hover {
      border-color:${darken(0.1,'#d7d7d7')};
    }
    
    img {
      width:1.2rem;
    }
`