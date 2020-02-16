import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import { DropResult, DraggableLocation, DroppableProvided, DragDropContext, Droppable } from "react-beautiful-dnd";
import { Column } from "./column";
import { reorder, reorderTaskMap } from "../utils/reorder";

interface ParentContainerProps {
  height: number;
}

const ParentContainer: StyledComponent<"div", any, ParentContainerProps, never> = styled.div`
  height: ${(props: ParentContainerProps) => props.height};
`;

const Container = styled.div`
  display: inline-flex;
  flex: 1;
  justify-content: space-around;
`;

interface Props {
  initial: {
    [key: string]: string[];
  };
  withScrollableColumns?: boolean;
  containerHeight?: string;
}

interface State {
  columns: {
    [key: string]: string[];
  };
  ordered: string[];
}

export function Board(props: Props) {
  const [columns, setColumns] = React.useState<{ [key: string]: string[] }>(props.initial);
  const [ordered, setOrdered] = React.useState<string[]>(Object.keys(props.initial));

  let boardRef: HTMLElement | undefined;

  const onDragEnd = (result: DropResult) => {
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow: string[] = [...ordered];
        shallow.splice(result.source.index, 1);
        setOrdered(shallow);
        return;
      }

      const column: string[] = columns[result.source.droppableId];
      const withTaskRemoved: string[] = [...column];
      withTaskRemoved.splice(result.source.index, 1);
      const newColumns: { [key: string]: string[] } = {
        ...columns,
        [result.source.droppableId]: withTaskRemoved
      };
      setColumns(newColumns);
      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source: DraggableLocation = result.source;
    const destination: DraggableLocation = result.destination;

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // reordering column
    if (result.type === "COLUMN") {
      const newOrdered: string[] = reorder(ordered, source.index, destination.index);
      setOrdered(newOrdered);
      return;
    }

    const data = reorderTaskMap({
      taskMap: columns,
      source,
      destination
    });

    setColumns(data.taskMap);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="COLUMN" direction="horizontal" ignoreContainerClipping={false}>
          {(provided: DroppableProvided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {ordered.map((key: string, index: number) => {
                console.log(columns[key]);
                return <Column key={key} index={index} title={key} data={columns[key]} isScrollable={false} />;
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
