export const BASE_URL: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "DOMAIN.com";
