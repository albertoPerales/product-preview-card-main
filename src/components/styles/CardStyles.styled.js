import styled from "styled-components";
import { sizes } from "../../utils/vars";

export const CardStyles = styled.div`
  width: 50%;
  height: 60%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  min-width: 650px;

  @media (min-width: 0px) and (max-width: 700px) {
    flex-direction: column;
    min-width: 350px;
  }
`;
