import styled from "styled-components";
import { colors, sizes } from "../../utils/vars";

export const Container = styled.div`
  @import url("https://fonts.google.com/specimen/Montserrat");
  @import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100;0,9..144,200;0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,100;1,9..144,200;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,800&display=swap");

  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.cream};
`;
