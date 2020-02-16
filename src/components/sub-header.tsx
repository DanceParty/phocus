import * as React from "react";
import styled from "styled-components";
import { Subtitle } from "./typography";

const Container = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function SubHeader() {
  return (
    <Container>
      <Subtitle>
        {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
      </Subtitle>
    </Container>
  );
}
