import styled from "styled-components";

export const Content = styled.div `
  height:100%;
  overflow:hidden;
  ul {
    li {
      display:flex;
      justify-content:space-between;
      align-items:center;
      span.withdrawn {
        color:var(--red);
      }
      span.deposit {
        color:var(--green);
      }

      div span {
        font-size:0.8rem;
        color:#d3d3d3;
      }
      & + li {
        margin-top:1rem;
      }
    }
  }
`