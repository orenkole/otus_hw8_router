import {
  ActionsType,
  AppStateType,
} from "@/common/types";
import { updateFieldInfo } from "@/common/helperFunctions";

const reducer = (
  prevState: AppStateType,
  action: ActionsType
): AppStateType => {
  switch(action.type) {
  case "UPDATE_FILLING_PERCENTAGE":
    return {
      ...prevState,
      fillingPercentage: action.payload
    };
  case "CELL_CLICK": 
    return {
      ...prevState,
      fieldInfo: [
        ...prevState.fieldInfo.map(row => (
          row.map(cell => {
            if(cell.id !== action.payload) {
              return cell;
            } else {
              return {
                ...cell,
                cellMode: cell.cellMode === 1 ? 0 : 1
              };
            }
          })
        ))
      ]
    };
  case "UPDATE_HEIGHT": 
    return {
      ...prevState,
      height: action.payload,
      fieldInfo: updateFieldInfo({
        prevFieldInfo: prevState.fieldInfo,
        width: prevState.width,
        height: action.payload,
      })
    };
  case "UPDATE_WIDTH": 
    return {
      ...prevState,
      width: action.payload,
      fieldInfo: updateFieldInfo({
        prevFieldInfo: prevState.fieldInfo,
        height: prevState.height,
        width: action.payload,
      })
    };   
  default: return prevState;
  }
};

export {reducer};