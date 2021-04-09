import { createGlobalStyle } from "styled-components";

import EdoWoff from "./assets/fonts/Edo.woff";
import EdoWoff2 from "./assets/fonts/Edo.woff2";

export default createGlobalStyle`

:root {

  --dark: #262626;
  --light: #A8B6BF;
  --one: #8D9CA6;
  --onetransparent: rgba(3,152,158,.95);
  --two: #b5ff00;
  --three: #03989e;
  --four: #5D6973;

}

@font-face {
        font-family: "Edo"; 
        src: url(${EdoWoff}) format("woff"), url(${EdoWoff2}) format("woff2");
        font-weight: 100; 
        font-style: normal;
    }



    * {
        box-sizing: border-box;
        
    }

body {
    background:linear-gradient(var(--light) 70%, var(--four)); 
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    min-height: 100vh; 
    height: 100%; 
}

ul, ol, li{
    margin: 0;
    padding: 0;
    list-style:none;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--dark);
  font-family: "Edo";
}
    `;
