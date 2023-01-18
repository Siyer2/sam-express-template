import awsServerlessExpress from "aws-serverless-express";
import { app } from "./index";

const server = awsServerlessExpress.createServer(app);
exports.handler = async (event: any, context: any) => {
  const res = await awsServerlessExpress.proxy(
    server,
    event,
    context,
    "PROMISE"
  ).promise;
  return res;
};
