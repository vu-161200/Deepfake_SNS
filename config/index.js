import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
export const JWT_SECRET = process.env.JWT_SECRET || "";
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "";

export { PORT, BASE_URL, JWT_SECRET, REFRESH_TOKEN_SECRET };
