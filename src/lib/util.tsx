import React from "react";
import { HashLoader } from "react-spinners";
import { Result } from "./types";
import { useUpdateAtom } from "jotai/utils";
import { columnsAtom } from "../store/store";
import { WIDTH_COLUMN_1, WIDTH_COLUMN_2, WIDTH_COLUMN_3 } from "./config";

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

//@ts-ignore
export const debounce = (func, delay) => {
  let timeoutId: any = null;
  //@ts-ignore
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const useResize = (delay: number): void => {
  const [size, setSize] = React.useState<number>(0);
  const setColumns = useUpdateAtom(columnsAtom);

  window.addEventListener(
    "resize",
    debounce(function () {
      setSize(window.innerWidth);
    }, delay)
  );

  console.log(size);

  if (0 < size && size < WIDTH_COLUMN_1) setColumns([0]);
  else if (size >= WIDTH_COLUMN_1 && size < WIDTH_COLUMN_2) setColumns([0, 1]);
  else if (size >= WIDTH_COLUMN_2 && size < WIDTH_COLUMN_3)
    setColumns([0, 1, 2]);
  else if (size >= WIDTH_COLUMN_3) setColumns([0, 1, 2, 3]);
};
