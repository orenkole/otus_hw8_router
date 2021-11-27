import { FieldStateType } from "@/common/types";
import { nanoid } from "nanoid";

const setInitialFieldInfo = (args: {
    width: number,
    height: number,
}): FieldStateType => {
  return Array.from({ length: (args.height) }, (_, y) => (
    Array.from({ length: (args.width) }, (_, x) => (
      {
        cellMode: 0,
        x,
        y,
        id: `${nanoid(10)}`,
      }
    ))
  ));
};

const updateFieldInfo = (args: {
    width: number,
    height: number,
    prevFieldInfo: FieldStateType
}): FieldStateType => {
  return Array.from({ length: (args.height) }, (_, y) => (
    Array.from({ length: (args.width) }, (_, x) => {
      return (args.prevFieldInfo[y] && args.prevFieldInfo[y][x])
        ? args.prevFieldInfo[y][x] 
        : {
          cellMode: 0,
          x,
          y,
          id: `${nanoid(10)}`,
        };
    })
  ));
};

export {updateFieldInfo, setInitialFieldInfo};