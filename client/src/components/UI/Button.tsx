import React from "react";

const Button = (props: { children: React.ReactNode; text: string }) => {
  return <div>{props.text}</div>;
};

export default Button;
