# Kanini Web LLM

This project is a web application built with React, TypeScript, and Vite, integrating a local Large Language Model (LLM) for interactive AI experiences directly in the browser.

## Features

- ⚡️ Fast development with Vite
- 🦜 Built with React + TypeScript
- 🤖 Runs LLM inference in the browser (WebLLM)
- 🔥 Hot Module Replacement (HMR) for rapid iteration
- 🧹 ESLint and Prettier for code quality

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Start the development server:**

```bash
npm run dev
```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) to use the app.

## Using WebLLM

This project uses [WebLLM](https://github.com/mlc-ai/web-llm) to run language models directly in your browser. No backend or cloud API required.

- Models are loaded and executed locally.
- See the `src/webllm` directory for integration details.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code

## Linting & Formatting

ESLint and Prettier are configured for consistent code style.  
You can expand the ESLint configuration for stricter rules as needed.

## License

MIT

---

> Powered by [Vite](https://vitejs.dev/), [React](https://react.dev/), and [WebLLM](https://github.com/mlc-ai/web-llm)
