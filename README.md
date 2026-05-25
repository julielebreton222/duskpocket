# Dusk Pocket

**A literary magazine for the words you wrote when you stopped thinking.**

## Technical Information

Dusk Pocket is a [TypeScript](https://www.typescriptlang.org/) monorepo with two packages:

- `client` - a React SPA (single-page application). This is where all the user interface code lives, as well as the content for the magazine (pieces, prompts, contributor bios).
- `server` (Express static file server). This is only used in production to serve the built files from the `client` package. There is no API or backend logic — all content is stored in the `client` package and bundled into the frontend.

The `shared` directory contains code shared between both packages.

The project uses Vite as the build tool and esbuild to bundle the server for production.

## Development Guide

### Getting Started

Before getting started, you will need an IDE (Integrated Development Environment) to work with the code. Microsoft's [Visual Studio Code](https://code.visualstudio.com/) is a popular choice with excellent TypeScript support, but you can use any IDE that supports TypeScript and React development.

In addition, you will need to clone the source code to your local machine. You can use a program such as [GitHub Desktop](https://github.com/apps/desktop), or you can use the Terminal with the following command:

```bash
cd $HOME/Desktop/ # or wherever you want to clone the repo
git clone git@github.com:julielebreton222/duskpocket.git
cd duskpocket/
code . # open the project in VS Code (or open your IDE and navigate to the project folder)
```

### Package Manager

This project uses `pnpm` as the package manager and for running development commands.

On macOS, the easiest approach is to first [install the Homebrew package manager](https://brew.sh/), and then install `pnpm` through Homebrew:

```bash
brew install pnpm
```

For all other platforms (or for a direct, non-Homebrew macOS install), visit the official `pnpm` installation guide: <https://pnpm.io/installation>.

### Installing Dependencies

After installing `pnpm`, run the following command in the project root to install all dependencies for both the `client` and `server` packages:

```bash
pnpm install
```

This command only needs to be run once after cloning the repository, or whenever new dependencies are added to either package.

## Running the Development Server

To start the development server, run the following command in the project root:

```bash
pnpm dev
```

This will start the Vite development server for the `client` package, which serves the React application locally on your machine. The server will be available at `http://localhost:3000/` in your web browser.

The Express server in the `server` package is only used in production to serve the built files, so there is no need to run it separately during development.

This is a "live server", so any changes you make to the source code will automatically reload the application in the browser.

### Other Commands

```bash
pnpm dev          # Start Vite dev server (port 3000, host-exposed)
pnpm build        # Build frontend + bundle server with esbuild
pnpm start        # Run production server (requires build first)
pnpm check        # TypeScript type-check (no emit)
pnpm format       # Prettier format all files
```
