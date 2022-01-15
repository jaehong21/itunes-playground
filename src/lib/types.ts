export interface requestType {
  limit: number | number[];
  keyword: string;
  entity: string;
  offset: number;
  country: string;
}

export interface responseType {
  resultCount?: number;
  results?: Result[];
}

export interface Result {
  wrapperType: WrapperType;
  kind: Kind;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionArtistId?: number;
  collectionArtistName?: string;
  collectionArtistViewUrl?: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: Date;
  collectionExplicitness: Explicitness;
  trackExplicitness: Explicitness;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: Country;
  currency: Currency;
  primaryGenreName: string;
  contentAdvisoryRating?: string;
  isStreamable: boolean;
}

export enum Explicitness {
  Cleaned = "cleaned",
  Explicit = "explicit",
  NotExplicit = "notExplicit",
}

export enum Country {
  Usa = "US",
  Korea = "KR",
}

export enum Currency {
  Usd = "USD",
}

export enum Kind {
  Song = "song",
  Book = "audiobook",
  Artist = "allArtist",
  Album = "album",
  Video = "musicVideo",
  Tv = "tvSeason",
}

export enum WrapperType {
  Track = "track",
}

// Converts JSON strings to/from your types
export class Convert {
  public static toWelcome(json: string): responseType {
    return JSON.parse(json);
  }

  public static welcomeToJson(value: responseType): string {
    return JSON.stringify(value);
  }
}
