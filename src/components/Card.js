import styled from "styled-components";
import { CardStyles } from "./styles";
// import { Button } from './styles/Button.styled';
import imageDesktop from "../../src/img/desktop.jpg";
import imageMobile from "../../src/img/mobile.jpg";
import { CardBody } from "./CardBody";
import { useEffect, useState } from "react";

export const CardImage = styled.img`
  width: 50%;
  max-height: 100%;

  @media (min-width: 0px) and (max-width: 700px) {
    width: 100%;
    height: 10%;
    content:url(${imageMobile})
  }
`;

export const Card = () => {
  return (
    <CardStyles>
      <CardImage src={ imageDesktop } alt="en bicicleta"></CardImage>
      <CardBody></CardBody>
    </CardStyles>
  );
};
