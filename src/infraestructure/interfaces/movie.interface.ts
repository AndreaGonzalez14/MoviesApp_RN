export interface Movie {
  id: number;
  title: string;
  description: string;
  realeaseDate: Date;
  rating: number;

  poster: string;
  backdrop: string;
}

export interface CompleteMovie extends Movie {
  genres: string[];
  duration: number;
  buget: number;
  originalTitle: string;
  productionCompanies: string[];
}
