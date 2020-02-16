import * as React from "react";
import styled from "styled-components";
import { Board } from "./board";

const TaskMap: { [key: string]: string[] } = {
  "Backlog 📚": ["Build out the database", "Connect my application to the database", "Make a ton of money"],
  "Active ✍": ["Work on the front end", "Build a beautifully structured React application", "Drink my old fashioned"],
  "Finished ✅": [
    "Dinner with Jeehyae for Valentine's Day",
    "Programming at the coffee shop in Juanita",
    "Waking up not too late in the morning"
  ]
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export function Body() {
  return (
    <Container>
      <Board initial={TaskMap} />
    </Container>
  );
}
