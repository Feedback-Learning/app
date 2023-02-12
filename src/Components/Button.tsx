import { MouseEventHandler } from "react";

function Button(props: { children: string, onClick?: MouseEventHandler<HTMLDivElement> | undefined }) {
  return (
    <div className="button" onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Button;