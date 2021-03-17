import { createGlobalStyle } from "styled-components";

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
    --dark: #202426;
  --light: #F2F2F2;
  --one: #6C733D;
  --onetransparent: rgba(108,115,61,.9);
  --two: #9DA65D;
  --three: #8C8C88;


}
    * {
        box-sizing: border-box;
    }

body {
    background:var(--light); 
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
}

ul, ol, li{
    margin: 0;
    padding: 0;
    list-style:none;
}
    `;
