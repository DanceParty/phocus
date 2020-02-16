import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import { DraggableProvided } from "react-beautiful-dnd";
import { Content } from "./typography";

interface Props {
  children: React.ReactNode;
  isDragging: boolean;
  provided: DraggableProvided;
  isGroupedOver?: boolean;
  index?: number;
}

interface ItemProps {
  isDragging: boolean;
  isGroupedOver: boolean;
  ref: any;
  "data-is-dragging": boolean;
  "data-index"?: number;
  [key: string]: any;
}

const Item: StyledComponent<"div", any, ItemProps, never> = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    background-color: #484848;
  }
  white-space: nowrap;
`;

export function ListItem(props: Props) {
  return (
    <Item
      isDragging={props.isDragging}
      isGroupedOver={props.isGroupedOver}
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      data-is-dragging={props.isDragging}
      data-index={props.index}
    >
      <Content>{props.children}</Content>
    </Item>
  );
}
