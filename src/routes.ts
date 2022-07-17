import { Express, Request, Response } from "express";

import { getBridgetransactionHandler } from "./controller/bridgetransaction.controller";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200))

  app.get('/api/tx/:kappa', getBridgetransactionHandler)
}