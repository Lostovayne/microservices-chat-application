# Microservice Chat Application

Welcome to the **Microservice Chat Application** repository—a modern, scalable, and maintainable chat application architecture based on microservices.

## Overview

This project serves as a foundation for a distributed chat application, leveraging a microservices architecture. Each service is independent, allowing for autonomous development, deployment, and scaling.

## Project Structure

- **services/**: Contains the main microservices:
  - `user-service`: User management.
  - `gateway-service`: Gateway for client-to-service communication.
  - `chat-service`: Handles messages and chat rooms.
  - `auth-service`: Authentication and authorization.
- **packages/common**: Shared code and utilities across services.

## Technologies

- **Node.js** + **TypeScript** for all services.
- **pnpm** as the package and workspace manager.
- **ESLint** and **Prettier** for code quality and formatting.
- Extensible architecture, ready for CI/CD integration.

## Main Scripts

- `pnpm build`: Builds all services.
- `pnpm dev`: Starts all services in development mode.
- `pnpm lint`: Lints all code.
- `pnpm format`: Formats the codebase.
- `pnpm test`: Runs tests.

## Getting Started

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Start the development environment:
   ```sh
   pnpm dev
   ```

## Contributing

Contributions are welcome! Please open an issue or pull request for suggestions and improvements.

---

**License:** ISC
