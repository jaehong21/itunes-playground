import { atom } from "jotai";

export const defaultKeyword: string = "";
export const keywordAtom = atom<string>(defaultKeyword);

export const defaultLimit: number = 30;
export const limitAtom = atom<number>(defaultLimit);

export const favoriteAtom = atom<number[]>([]);
