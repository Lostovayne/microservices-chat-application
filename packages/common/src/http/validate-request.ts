import type { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod";
import { HttpError } from "../errors/http-error";

export interface RequestValidationSchema {
  body?: ZodType;
  params?: ZodType;
  query?: ZodType;
}

export interface ValidationIssue {
  path: string;
  message: string;
}

export const formatZodError = (error: ZodError): ValidationIssue[] => {
  return error.issues.map((issue) => ({
    path: issue.path.join("."),
    message: issue.message,
  }));
};

export const validateRequest = (schemas: RequestValidationSchema) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      if (schemas.body) {
        req.body = schemas.body.parse(req.body);
      }

      if (schemas.params) {
        req.params = schemas.params.parse(req.params) as Request["params"];
      }

      if (schemas.query) {
        req.query = schemas.query.parse(req.query) as Request["query"];
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        next(
          new HttpError(422, "Validation Error", {
            issues: formatZodError(error),
          })
        );
        return;
      }
      next(error);
    }
  };
};
