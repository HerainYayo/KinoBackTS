// src/index.ts
import express from "express";
// import {googleapis} from "googleapis"
import helmet from "helmet";
import cors from "cors";
import axios from "axios";
import session from 'express-session';

import dotenv from 'dotenv';
dotenv.config();

import {moduleManagerInstance} from "./core/moduleManager";

import { register as register_auth } from './auth/auth_general';
import { register as register_broadcast } from './broadcastRoom/room_general';


const app: express.Application = express();
const port = process.env.PORT || 3000;

// app.use(express.json());

// app.use(helmet());
// app.use(cors({
//   origin: process.env.ORIGIN,
//   credentials: true
// }));

app.use(express.text());

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

// app.use(session({
//   secret: 'mySecret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }));

// register_auth(app, moduleManagerInstance);

// register_broadcast(app, moduleManagerInstance);

// Homepage
app.get("/", (req, res) => {
  res.send("Hello World!");
});
