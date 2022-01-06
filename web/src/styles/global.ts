import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    :root {
        --background:#F0F2F5;
        --red:#E52E4D;
        --blue:#5429CC;
        --blue-light:#6933FF;
        --green:#33CC95;
        --text-title:#363F5F;
        --text-body:#969CB3;
        --shape:#FFF;
    }
    #root {
      overflow:hidden;
    }
    ul {
        list-style:none ;
    }
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html {
        @media (max-width:1080px) {
            font-size:92.75%; // 15 px
        }

        @media (max-width:720px){
            font-size:87.5%;// 14px
        }

    }
    // REm = 1rem = font-size
    body {
        background:var(--background);
        font-family: 'Roboto', sans-serif;    
    }
    
    button {
        cursor:pointer;
    }

    [disabled] {
        opacity:0.6;
        cursor:not-allowed;
    }

    .react-modal-overlay {
      background:rgba(0,0,0,0.5);
      position:fixed;
      width:100%;
      top:0;
      left:0;
      height:100vh;
      display:flex;
      justify-content: center;
      align-items:center;
      
    }

    .react-modal-content {
      width:100%;
      max-width:576px;
      background:var(--background);
      padding:3rem;
      position:relative;
      border-radius: 0.25rem;
    }
    .react-modal-close {
      border:none;
      background:transparent;
      position:absolute;
      top:1.5rem;
      right:1.5rem;
      transition:filter 0.2s;
      &:hover {
        filter:brightness(0.8);
      }
    }
`