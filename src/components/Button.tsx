import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};
const Button = ({ children }: PropsType) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        backgroundColor: "blue",
        color: "White",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};
export { Button };
