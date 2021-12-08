import { InterpolationWithTheme } from "@emotion/core";
import { keyframes } from "@emotion/react";

const ripple = keyframes`
    from {
        opacity: 1;
        transform: scale(0);
    }

    to {
        opacity: 0;
        transform: scale(5);
    }
`;

const cellBoxStyle: InterpolationWithTheme<any> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px",
  border: "1px solid black",
  width: "20px",
  height: "20px",
  // position ripple span
  position: "relative",
  overflow: "hidden",
  "& .active": {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 255, 0, 0.3)",
    width: "100px",
    height: "100px",
    marginTop: "-50px",
    marginLeft: "-50px",
    animation: `${ripple} 2s`,
    opacity: 0,
  },
};

export {
  cellBoxStyle,
};