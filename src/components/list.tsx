import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import {
  Droppable,
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot
} from "react-beautiful-dnd";
import { ListItem } from "./list-item";

interface ContainerProps {
  isDraggingOver: boolean;
  isDraggingFrom: boolean;
  [key: string]: any;
}

const Container: StyledComponent<"div", any, ContainerProps, never> = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 90%;
`;

const scrollContainerHeight: number = 250;

const DropZone = styled.div`
  min-height: ${scrollContainerHeight}px;
`;

const InnerDataList = (props: { data: string[] }): any => {
  return props.data.map((task: string, index: number) => (
    <Draggable key={task} draggableId={task} index={index}>
      {(dragProvided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
        <ListItem key={task} isDragging={dragSnapshot.isDragging} provided={dragProvided}>
          {task}
        </ListItem>
      )}
    </Draggable>
  ));
};

const InnerDataListWrapper = React.memo(InnerDataList);

interface InnerListProps {
  dropProvided: DroppableProvided;
  data: string[];
}

function InnerList(props: InnerListProps) {
  return (
    <div>
      <DropZone ref={props.dropProvided.innerRef}>
        <InnerDataListWrapper data={props.data} />
        {props.dropProvided.placeholder}
      </DropZone>
    </div>
  );
}

interface Props {
  listId?: string;
  listType?: string;
  data: string[];
}

export function List(props: Props) {
  return (
    <Droppable droppableId={props.listId || "LIST"} type={props.listType}>
      {(dropProvided: DroppableProvided, dropSnapshot: DroppableStateSnapshot) => (
        <Container
          isDraggingOver={dropSnapshot.isDraggingOver}
          isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
          {...dropProvided.droppableProps}
        >
          <InnerList data={props.data} dropProvided={dropProvided} />
        </Container>
      )}
    </Droppable>
  );
}
