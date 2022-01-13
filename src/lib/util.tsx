import React from "react";
import { HashLoader, MoonLoader } from "react-spinners";
import { Result } from "./types";

export function loadComponent(
  loading: boolean,
  LoadingComponent: JSX.Element,
  Component: undefined | JSX.Element
) {
  if (!loading) {
    return Component;
  } else {
    return LoadingComponent;
  }
}

export const LoadingComponent = () => {
  return (
    <div
      style={{
        width: "95%",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        opacity: 0.5,
      }}
    >
      <HashLoader color="#EA4CC0" size="50px" />
    </div>
  );
};

export const isDuplicate = (arr: Result[], value: number) => {
  let check = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trackId === value) {
      check = true;
      break;
    }
  }
  return check;
};
export const arrFilter = (arr: Result[], value: number) => {
  return arr.filter((item: Result) => item.trackId !== value);
};
