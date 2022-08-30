import { useState } from "react";
import { Card } from "./components/Card";
import { GlobalStyles } from "./components/styles";
import { Container } from "./components/styles";

function App() {
  const [devide, setDevice] = useState();

  return (
    <>
      <GlobalStyles />
      <Container>
        <Card></Card>
      </Container>
    </>
  );
}

export default App;
