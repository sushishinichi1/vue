import { rest } from "msw";
import { booking, carData, getUserData, selectUserData } from "./data/user";

export const handlers: any = [
  rest.get("/users", (req, res, ctx) => {
    return res(ctx.json(getUserData));
  }),

  rest.get("/user/:id", (req, res, ctx) => {
    return res(ctx.json(selectUserData));
  }),
  rest.get("/car", (req, res, ctx) => {
    return res(ctx.json(carData));
  }),
  rest.get("/yoyaku", (req, res, ctx) => {
    return res(ctx.json(booking));
  }),
];
