import { createGlobalStyle } from "styled-components";
import { normalize } from "../../utils/normalize.styled";
import { fonts, colors } from "../../utils/vars";

export const GlobalStyles = createGlobalStyle`
    
    * {
        box-sizing: boder-box;
    }

    ${ normalize }

    p {
        font-family: ${ fonts.montserrat };
    }

    h1 {
        font-family: ${ fonts.fraunces };
        font-size: 3em;
    }

`;
