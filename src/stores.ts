import { atom } from "jotai";
import { Country, Kind, requestType, Result } from "./lib/types";

export const defaultColumns: number[] = [0, 1];
export const columnsAtom = atom<number[]>(defaultColumns);

export const defaultKeyword: string = "";
export const keywordAtom = atom<string>(defaultKeyword);

export const defaultEntity: Kind = Kind.Song;
export const entityAtom = atom<string>(defaultEntity);

export const defaultLimit: number = 9;
export const limitAtom = atom<number>(defaultLimit);

export const defaultOffset: number = 0;
export const offsetAtom = atom<number>(defaultOffset);

export const defaultParam: requestType = {
  keyword: "",
  entity: Kind.Song,
  limit: 9,
  offset: 0,
  country: Country.Usa,
};
export const paramAtom = atom<requestType>(defaultParam);

export const favoriteAtom = atom<Result[]>([]);
