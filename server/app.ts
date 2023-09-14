import express, { NextFunction, Request, Response } from "express";
export const app = express();
require("dotenv").config();

import cors from "cors";
import cookieParser from "cookie-parser";
import e from "express";

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use(cors({ origin: process.env.ORIGIN }));

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: true, message: "API is working" });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server`) as any;
    err.statusCode = 404;
    next(err);
    }
);