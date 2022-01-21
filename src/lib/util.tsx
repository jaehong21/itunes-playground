import React from "react";
import { HashLoader } from "react-spinners";
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

//@ts-ignore
export const debounce = (func, delay) => {
  let timeoutId: any = null;
  //@ts-ignore
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const generateColumn = (value: number | number[]) => {
  switch (value) {
    case 1:
      return [0];
    case 2:
      return [0, 1];
    case 3:
      return [0, 1, 2];
    case 4:
      return [0, 1, 3, 4];
    default:
      return [0, 1];
  }
};

export const onSave = (key: string, value: any) => {
  localStorage.setItem("iTunes", JSON.stringify(value));
};
export const onLoad = (key: string, func: any) => {
  func(JSON.parse(localStorage.getItem(key) as string));
};

/*export const useResize = (delay: number): void => {
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
};*/
