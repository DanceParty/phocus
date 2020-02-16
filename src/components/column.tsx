import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { List } from "./list";
import { ContentTitle } from "./typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 33%;
`;

interface HeaderProps {
  isDragging: boolean;
  [key: string]: any;
}

const Header: StyledComponent<"div", any, HeaderProps, never> = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

interface Props {
  title: string;
  index: number;
  data: string[];
  isScrollable?: boolean;
  isCombineEnabled?: boolean;
  useClone?: boolean;
}

export function Column(props: Props) {
  return (
    <Container>
      <Header>
        <ContentTitle>{props.title}</ContentTitle>
      </Header>
      <List listId={props.title} listType="TASK" data={props.data} />
    </Container>
  );
}
