export const HTTPS = "https";
export const BASE_URL = `${HTTPS}://${process.env.BASE_URL}`;
export const ASSETS_URL =
  `${HTTPS}://${process.env.ASSETS_HOSTNAME}/${process.env.ASSETS_PATHNAME}` ||
  "";
