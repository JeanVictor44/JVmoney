import styled from "styled-components"

export const Grid = styled.div `
    display:grid;
    grid-template-columns: minmax(100px,200px) 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas: "sidebar header"
                         "sidebar main";
    grid-row:2 / 3;
` 