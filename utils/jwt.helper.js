import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const signAccessToken = (userId) => {
  const accessToken = jwt.sign({ _id: userId }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return accessToken;
};

export const signRefreshToken = (userId) => {
  const refreshToken = jwt.sign({ _id: userId }, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return refreshToken;
};
