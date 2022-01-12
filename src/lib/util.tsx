import React from "react";
import { MoonLoader } from "react-spinners";

export function loadComponent(
  loading: boolean,
  LoadingComponent: JSX.Element,
  Component: JSX.Element
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
      }}
    >
      <MoonLoader color="#EA4CC0" size="50px" />
    </div>
  );
};

export const WINDOW_WIDTH: number = window.innerWidth;
export const WINDOW_HEIGHT: number = window.innerHeight;

export const isDuplicate = (arr: number[], value: number) => {
  return arr.includes(value);
};
export const arrFilter = (arr: number[], value: number) => {
  return arr.filter((item: number) => item !== value);
};
