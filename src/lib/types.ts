export interface requestType {
  limit: number;
  keyword: string;
  entity: Kind;
  offset: number;
  country: Country;
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
  Korea = "KO",
}

export enum Currency {
  Usd = "USD",
}

export enum Kind {
  Song = "song",
  Book = "book",
  Album = "album",
  Video = "music-video",
  Tv = "tv-episode",
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
