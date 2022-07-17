import {
  FilterQuery,
  QueryOptions,
} from "mongoose";
import Bridgetransaction, { BridgetransactionDocument } from "../model/bridgetransaction.model";

export function findBridgetransaction(
  query: FilterQuery<BridgetransactionDocument>,
  options: QueryOptions = { lean: true }
) {
  return Bridgetransaction.findOne(query, {}, options);
}