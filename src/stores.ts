import { atom } from "jotai";
import { Kind, Result } from "./lib/types";

export const defaultKeyword: string = "";
export const keywordAtom = atom<string>(defaultKeyword);

export const defaultEntity: Kind = Kind.Song;
export const entityAtom = atom<string>(defaultEntity);

export const defaultLimit: number = 9;
export const limitAtom = atom<number>(defaultLimit);

export const defaultOffset: number = 0;
export const offsetAtom = atom<number>(defaultOffset);

export const favoriteAtom = atom<Result[]>([]);
