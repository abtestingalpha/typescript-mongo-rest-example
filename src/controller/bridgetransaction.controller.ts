import { Request, Response } from "express"
import { get } from "lodash"
import {
  findBridgetransaction,
} from "../service/bridgetransaction.service"

export async function getBridgetransactionHandler(req: Request, res: Response) {
  const kappa = get(req, "params.kappa");
  const bridgetransaction = await findBridgetransaction({ kappa });

  if (!bridgetransaction) {
    return res.sendStatus(404);
  }

  return res.send(bridgetransaction);
}
