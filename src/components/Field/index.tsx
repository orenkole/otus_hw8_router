import React, {Dispatch, useEffect} from "react";
import { Cell } from "@/components/Cell";
import { Row } from "@/components/Row";
import { ActionsType, FieldStateType } from "@/common/types";

export type FieldPropsType = {
  fieldInfo: FieldStateType,
  dispatch: Dispatch<ActionsType>,
}

const Field = (props: FieldPropsType) => {
  useEffect(() => {
    console.log("Field did mount");
  });
  
  const {
    fieldInfo,
    dispatch
  } = props;
  console.log("FIELD STATE ", fieldInfo);
  return (
    <div>
      {
        fieldInfo.map(row => (
          <Row key={row[0].y}>
            {row.map(cell => {
              return (
                <Cell
                  key={cell.id}
                  cellInfo={cell}
                  dispatch={dispatch}
                />
              );
            })}
          </Row>
        ))
      }
    </div>
  );
};

export {Field};