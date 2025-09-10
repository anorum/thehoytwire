# The Hoyt Wire - Fantasy Football Blog

**10 Managers • 17 Weeks • ∞ Storylines**

This repository contains the source code for "The Hoyt Wire," a fantasy football blog built with [Astro](https://astro.build/). The project is designed for easy local development and containerized deployment using Docker.

## Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Rendering**: Server-Side Rendering (SSR) with the [Astro Node.js adapter](https://docs.astro.build/en/guides/integrations-guide/node/)
- **Deployment**: Docker & GitHub Container Registry

## Project Structure

The repository is organized as a monorepo with all project files located in the root directory.

```
/
├── .dockerignore
├── .gitignore
├── Dockerfile
├── deploy.sh
├── hoyt-wire/           # Astro project root
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

- **`hoyt-wire/`**: This directory contains the entire Astro project, including all source code, content, and configuration.
- **Root Directory**: The root contains all deployment-related files (`Dockerfile`, `.dockerignore`, `deploy.sh`), the main `.gitignore`, and this `README.md`.

## Getting Started

### Prerequisites

- Node.js (v20.x or later)
- npm

### Local Development

1.  **Navigate to the Astro project directory**:
    ```bash
    cd hoyt-wire
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

The development server will start on `http://localhost:4321`.

## Deployment

This project is configured for containerized deployment using Docker.

### Building the Docker Image

The `deploy.sh` script automates the Docker build and push process. To build and push the image to GitHub Container Registry, run:

```bash
./deploy.sh
```

The script will:
1.  Build the Docker image.
2.  Tag it with `ghcr.io/anorum/thehoytwire:latest`.
3.  Push the image to the GitHub Container Registry.

### Dockerfile Overview

The `Dockerfile` uses a multi-stage build to create a lean production image:
1.  **Build Stage**: Installs dependencies and builds the Astro project.
2.  **Production Stage**: Copies the built `dist/` directory, `node_modules/`, and `package.json` into a lightweight Node.js Alpine image.

The final image runs the application using the Node.js server entry point at `dist/server/entry.mjs`.

## Content Management

All fantasy football recaps are stored as Markdown files in `hoyt-wire/src/content/fantasy-recaps/`. To add a new recap, create a new `.md` file in this directory and follow the existing frontmatter structure.
