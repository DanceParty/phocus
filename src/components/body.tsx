import * as React from "react";
import styled from "styled-components";
import { Board } from "./board";
import { List } from "./list";
import { ListItem } from "./list-item";

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
      {/* <List title="Backlog 📚">
        <ListItem>Build out the database</ListItem>
        <ListItem>Connect my application to the database</ListItem>
        <ListItem>Make a ton of money</ListItem>
      </List>
      <List title="Active ✍">
        <ListItem>Work on the front end</ListItem>
        <ListItem>
          Build a beautifully structured React application Build a beautifully structured React application Build a
          beautifully structured React application
        </ListItem>
        <ListItem>Drink my old fashioned</ListItem>
      </List>
      <List title="Finished ✅">
        <ListItem>Dinner with Jeehyae for Valentine's Day</ListItem>
        <ListItem>Programming at the coffee shop in Juanita</ListItem>
        <ListItem>Waking up not too late in the</ListItem>
      </List> */}
    </Container>
  );
}
