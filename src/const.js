export const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const COLUMN_QUANTITY = 2;

export const PRECISION_RATING = 2;

export const TIMEOUT_PREVIEW = 1000;

export const CONTENT_TYPE = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

export const POSTER_SIZE = {
  WIDTH: `280`,
  HEIGHT: `175`
};

export const COUNT_CARD = {
  SAME: 4,
  MAIN_PER_STEP: 8,
  ACTIVE: 0
};

export const FILTER_TYPE = {
  ALL_GENRE: `All genre`,
  COMEDIES: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Dramas`,
  HORROR: `Horror`,
  KIDS_FAMILY: `kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`
};

export const MAX_FILTERS = 9;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  PLAYER: `/player/:id`,
};

export const APIRoute = {
  FILMS: `/films`,
  PROMO: `/films/promo`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
  ERROR: `/error`
};

export const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
