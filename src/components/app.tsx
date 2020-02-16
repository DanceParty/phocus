import * as React from "react";
import styled from "styled-components";
import { Header } from "./header";
import { SubHeader } from "./sub-header";
import { Body } from "./body";
import { Footer } from "./footer";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function App() {
  return (
    <Container>
      <Header />
      <SubHeader />
      <Body />
      <Footer />
    </Container>
  );
}
