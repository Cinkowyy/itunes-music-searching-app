export interface songProps {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl30: string;
  artworkUr160: string;
  artworkUrl100: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  ollectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  currency: string;
  discCount: number;
  discNumber: number;
  isStreamable: boolean;
  kind: string;
  previewUrl: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
}

export interface artistProps {
  wrapperType: string;
  artistType: string;
  artistName: string;
  artistLinkUrl: string;
  artistId: number;
  amgArtistId: number;
  primaryGenreName: string;
  primaryGenreId: number;
}

export interface dataProps {
  resultCount: number;
  results: (songProps | artistProps)[];
}
