export const HTTPS = "https";
export const BASE_DOMAIN = "www.xchen.org";
export const BASE_URL = `${HTTPS}://${BASE_DOMAIN}`;
export const ASSETS_DOMAIN = "static.xchen.org";
export const ASSETS_PATH = "5552da8504271da967caf6b57acc69e5/public";
export const ASSETS_URL =
  process.env.NODE_ENV === "production"
    ? `${HTTPS}://${ASSETS_DOMAIN}/${ASSETS_PATH}`
    : "";
