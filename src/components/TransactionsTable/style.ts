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
            &.withdraw {
                color:var(--red);
            }
        }
        tbody {
            tr {
                background-color:var(--shape);
            }
            
        }
    }
`