import * as React from "react";
import styled from "styled-components";
import { Button } from "./button";

const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Footer() {
  return (
    <Container>
      <Button>Add Task 💃</Button>
    </Container>
  );
}
