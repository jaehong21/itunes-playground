import React from "react";
import { MoonLoader } from "react-spinners";

export function loadComponent(loading, LoadingComponent, Component) {
  if (loading === false) {
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

export const WINDOW_WIDTH = window.innerWidth;
export const WINDOW_HEIGHT = window.innerHeight;

export const isDuplicate = (arr, value) => {
  return arr.includes(value);
};
export const arrFilter = (arr, value) => {
  return arr.filter((item) => item !== value);
};
