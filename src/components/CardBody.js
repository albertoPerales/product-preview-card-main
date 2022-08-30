import styled from "styled-components";
import { colors } from "../utils/vars";
import { Button } from "../components/styles";

const CardBodyStyles = styled.div`
  width: 100%;
  height: 100%;
  padding: 3% 5%;

`;

const Category = styled.p`
  font-weight: 500;
  letter-spacing: 5px;
  color: ${colors.dark__blue};
`;

const Title = styled.h1`
  color: rgb(25, 32, 37);
  line-height: 45px;
  font-weight: 700;
`;

const TextBody = styled.p`
  color: ${colors.dark__blue};
  line-height: 30px;
  font-weight: 500;
  font-size: 1.1em;
  margin-bottom: 0;
  word-wrap: break-word;
  margin: 10px;

`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Price = styled.h1`
  color: ${colors.dark__cyan};
  font-weight: 700;
`;

const CrossedPrice = styled.p`
  text-decoration: line-through;
  color: ${colors.dark__blue};
  margin-left: 2em;
`;

export const CardBody = () => {
  return (
    <CardBodyStyles>
        <Category>PERFUME</Category>
        <Title>Gabrielle Essence Eau De Parfum</Title>
        <TextBody>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </TextBody>
        <Flex>
          <Price>$149.99</Price>
          <CrossedPrice>$169.99</CrossedPrice>
        </Flex>
        <Button />
    </CardBodyStyles>
  );
};
