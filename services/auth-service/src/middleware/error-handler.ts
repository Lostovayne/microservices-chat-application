import { HttpError } from "@chatapp/common";

import type { ErrorRequestHandler } from "express";
import { logger } from "@/utils/logger";

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  logger.error({ err }, "Unexpected error occurred");
  const error =
    err instanceof HttpError
      ? err
      : new HttpError(500, "Internal Server Error");
};
