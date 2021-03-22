import { createGlobalStyle } from "styled-components";

import EdoWoff from "./Edo.woff";
import EdoWoff2 from "./Edo.woff2";
import EdoTtf from "./edosz.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "Edo"; 
        src: local("Edo"), local"("Edo"),
        url(${EdoWoff}) format ("woff"),
        url(${EdoWoff2}) format ("woff2");
        font-weight: 300; 
        font-style: normal;
    }
`;
