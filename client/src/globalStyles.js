import { createGlobalStyle } from "styled-components";

import EdoWoff from "./assets/fonts/Edo.woff";
import EdoWoff2 from "./assets/fonts/Edo.woff2";

export default createGlobalStyle`

:root {

    //Farben Versuch 1:
/*   --one: #F08E38;
  --three: #FFD8B5;
  --four: #A35715;
  --two: #0F89A3;
  --five: #7FDCF0; 
  --dark: #0e0e0e;
  --light: #f3f3f3; */

    //Farben Versuch 2: 
/*     --dark: #202426;
  --light: #F2F2F2;
  --one: #6C733D;
  --onetransparent: rgba(108,115,61,.9);
  --two: #9DA65D;
  --three: #8C8C88; */

// Farben Versuch 3:
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
        font-weight: 300; 
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
