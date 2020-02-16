import { DraggableLocation } from "react-beautiful-dnd";
// a little function to help us with reordering the result
export const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default reorder;

interface ReorderTaskMapArgs {
  taskMap: {
    [key: string]: string[];
  };
  source: DraggableLocation;
  destination: DraggableLocation;
}

export interface ReorderTaskMapResult {
  taskMap: {
    [key: string]: string[];
  };
}

export const reorderTaskMap = ({ taskMap, source, destination }: ReorderTaskMapArgs): ReorderTaskMapResult => {
  const current: string[] = [...taskMap[source.droppableId]];
  const next: string[] = [...taskMap[destination.droppableId]];
  const target: string = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered: string[] = reorder(current, source.index, destination.index);
    const result: { [key: string]: string[] } = {
      ...taskMap,
      [source.droppableId]: reordered
    };
    return {
      taskMap: result
    };
  }

  // moving to a different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  const result: { [key: string]: string[] } = {
    ...taskMap,
    [source.droppableId]: current,
    [destination.droppableId]: next
  };

  return {
    taskMap: result
  };
};

interface List<T> {
  id: string;
  values: T[];
}

interface MoveBetweenArgs<T> {
  list1: List<T>;
  list2: List<T>;
  source: DraggableLocation;
  destination: DraggableLocation;
}

interface MoveBetweenResult<T> {
  list1: List<T>;
  list2: List<T>;
}

export function moveBetween<T>({ list1, list2, source, destination }: MoveBetweenArgs<T>): MoveBetweenResult<T> {
  const newFirst = Array.from(list1.values);
  const newSecond = Array.from(list2.values);

  const moveFrom = source.droppableId === list1.id ? newFirst : newSecond;
  const moveTo = moveFrom === newFirst ? newSecond : newFirst;

  const [moved] = moveFrom.splice(source.index, 1);
  moveTo.splice(destination.index, 0, moved);

  return {
    list1: {
      ...list1,
      values: newFirst
    },
    list2: {
      ...list2,
      values: newSecond
    }
  };
}
