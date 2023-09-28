import React from "react";

export const Button = (props) => {
  let { txt, clck } = props;
  return (
    <button className="btn" onClick={clck}>
      {txt}
    </button>
  );
};
