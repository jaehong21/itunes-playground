import { atom } from "jotai";
import { Country, Kind, requestType, Result } from "../lib/types";

export const defaultParam: requestType = {
  keyword: "",
  entity: Kind.Song,
  limit: 9,
  offset: 0,
  country: Country.Usa,
};
export const paramAtom = atom<requestType>(defaultParam);

export const defaultColumns: number[] = [0, 1];
export const columnsAtom = atom<number[]>(defaultColumns);

export const defaultVolume: number = 40;
export const volumeAtom = atom<number | number[]>(defaultVolume);

export const isFavoriteAtom = atom<boolean>(false);
export const favoriteAtom = atom<Result[]>([]);
