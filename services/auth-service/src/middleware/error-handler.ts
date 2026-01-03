import { logger } from "@/utils/logger";
import { HttpError } from "@chatapp/common";
import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  logger.error({ err, path: req.path, method: req.method, ip: req.ip }, "Unexpected error occurred");
  const error = err instanceof HttpError ? err : new HttpError(500, "Internal Server Error");

  res.status(error.statusCode).json({
    error: {
      message: error.message,
      statusCode: error.statusCode,
      ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    },
  });
};
