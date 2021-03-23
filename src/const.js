export const APIRoute = {
  FILMS: `/films`,
  PROMO: `/films/promo`,
  COMMENTS: `/comments`,
  MY_LIST: `/favorite`,
  LOGIN: `/login`,
  ERROR: `/error`,
  LOG_OUT: `/logout`
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILMS: `/films`,
  PLAYER: `/player`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const COLUMN_QUANTITY = 2;

export const COMMENT_LENGTH = {
  MIN: 50,
  MAX: 400
};

export const CONTENT_TYPE = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

export const COUNT_CARD = {
  SAME: 4,
  MAIN_PER_STEP: 8,
  ACTIVE: 0
};

export const FAVORITE_STATUS = {
  ADD_TO: 1,
  NO_ADD: 0
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

export const FULL_SCREEN_SIZE = {
  WIDTH: `100%`,
  HEIGHT: `100%`
};

export const MAX_FILTERS = 9;

export const PAGE_TYPE = {
  LOGIN: `login`,
  USER: `user`
};

export const POSTER_SIZE = {
  WIDTH: `280`,
  HEIGHT: `175`
};

export const PRECISION_RATING = 2;

export const RATING_LEVEL = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const RATING_STARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const SMALL_SCREEN_SIZE = {
  WIDTH: `50%`,
  HEIGHT: `50%`
};

export const TIME_FORMAT = {
  ATTRIBUTE: `YYYY-MM-DD`,
  TEXT: `MMMM D, YYYY`
};

export const TIMEOUT_PREVIEW = 1000;
