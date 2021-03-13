import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --orange: #F08E38;
  --orange2: #FFD8B5;
  --orange3: #A35715;
  --blue: #0F89A3;
  --blue2: #7FDCF0; 
  --dark: #0e0e0e;
  --light: #f3f3f3;
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
