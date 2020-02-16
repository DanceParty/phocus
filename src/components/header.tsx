import * as React from "react";
import styled from "styled-components";
import { Title } from "./typography";

const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function Header(): JSX.Element {
  return (
    <Container>
      <Title>PHOCUS</Title>
    </Container>
  )
}