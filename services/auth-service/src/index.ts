import { createApp } from "@/app";
import { env } from "@/config/env";
import { logger } from "@/utils/logger";
import { createServer } from "http";

(async () => {
  try {
    const app = createApp();
    const server = createServer(app);
    const port = env.AUTH_SERVICE_PORT;

    server.listen(port, () => {
      logger.info({ port }, `Auth service is running`);
    });

    const shutdown = () => {
      logger.info("Shutting down auth service");

      Promise.all([])
        .catch((error) => {
          logger.error({ error }, "Error Error during shutdown");
        })
        .finally(() => {
          server.close(() => process.exit(0));
        });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  } catch (error) {
    logger.error({ error }, `Failed to start auth service `);
    process.exit(1);
  }
})();
