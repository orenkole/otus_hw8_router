import React, {useReducer} from "react";
import { Field } from "@/components/Field";
import { ControlPanel } from "@/components/ControlPanel";
import {
  AppStateType,
} from "@/common/types";
import { reducer } from "@/common/reducer";
import { setInitialFieldInfo } from "@/common/helperFunctions";
import { Container } from "@/elements/Container";
import { Box } from "@/elements/Box";
import { appStyles } from "./style";
import { SignInForm } from "@/components/SignInForm";


const App = () => {
  const initialSizes = {width: 2, height: 2};
  const initialState: AppStateType = {
    fieldInfo: setInitialFieldInfo({width: initialSizes.width, height: initialSizes.height}),
    fillingPercentage: 50,
    width: initialSizes.width,
    height: initialSizes.height
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div css={appStyles}>
      <Container>
        <Box
          display="grid"
          justifyItems="center"
          rowGap="50px"
        >
          <SignInForm />
          <ControlPanel 
            dispatch={dispatch}
            fillingPercentage={state.fillingPercentage}
            width={state.width}
            height={state.height}
          />
          <Field
            fieldInfo={state.fieldInfo}
            dispatch={dispatch}
          />
        </Box>
      </Container>
    </div>
  );
};

export {App};