import styled from "styled-components";
import { colors } from "../../utils/vars";

const ButtonContainer = styled.button`
    background: ${ colors.dark__cyan };
    border: none;
    color: ${ colors.white };
    width: 100%;
    height: 4em;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background ease-in-out 0.2s;

    &:hover {
        cursor:pointer;
        background: ${ colors.dark__cyan__pointed }
    }

    & > p {
        margin-left: 0.5em;
        font-weight: 500;
    }

    @media (min-width: 0px) and (max-width: 700px) {
        width: 90%;
      }
`

export const Button = () => {
    return (
        <ButtonContainer>
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>
            <p>Add to Cart</p>
        </ButtonContainer>
    )
}