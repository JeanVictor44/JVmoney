import styled from "styled-components";

export const Container = styled.div `
    table {
        margin:6rem auto;
        width:100%;
        border-spacing:0px 0.5rem;
        th {
            text-align:left;
            padding:1rem 2rem;
            color:var(--text-body);
        }
        td {
            padding:1rem 2rem;
            border:0px;
            color:var(--text-body);
            &:first-child {
                color:var(--text-title);
            }
            &.deposit {
                color:var(--green);
            }
            &.withdrawn {
                color:var(--red);
            }
            
            &:last-child {
              button {
                img {
                  width:1.2rem;
                  visibility:hidden;
                }
                border:0;
                background:transparent;
                cursor:pointer;
                
                
              }

            } 

        }

        tbody {
            tr {
                background-color:var(--shape);
                transition: background-color 0.2s ease-in;

                &:hover {
                  background-color:var(--blue);
                  td:not(:nth-child(2)){
                    color:#fff;
                  }

                }

                &:hover td:last-child img {
                  visibility:visible;
                }  
            }
            
        }

    }
`