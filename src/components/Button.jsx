import React from "react";

export default function Button(props) {
  return <div className={props.CSS}>{props.children}</div>;
}
