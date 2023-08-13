import { Router } from "express";

// Schema for the service
// export interface Service {
//     id?: string;
//     title: string;
//     description: string;
//     address: string;
//     cost: string;
//   }

export const serviceRouter = Router();

serviceRouter
  .route('/')
  .post(postAdvert)
  .get(getAdverts);
