import { atom } from "jotai";

export const defaultKeyword = "";
export const keywordAtom = atom(defaultKeyword);

const defaultFavorite = localStorage.getItem("itunes-playground-favorite");
export const favoriteAtom = atom(
  defaultFavorite === null ? [] : JSON.parse(defaultFavorite)
);
