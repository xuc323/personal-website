export const HTTPS = "https";
export const BASE_URL = `${HTTPS}://www.xchen.org`;
export const ASSETS_URL =
  process.env.NODE_ENV === "production"
    ? `${HTTPS}://static.xchen.org/5552da8504271da967caf6b57acc69e5/public`
    : "";
