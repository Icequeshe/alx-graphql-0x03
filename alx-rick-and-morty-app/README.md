# 🚀 ErrorBoundary Component

## 📘 Objective
Implement an **ErrorBoundary** class component in TypeScript to catch and handle JavaScript errors within the React (Next.js) application.

---

## 🧩 Project Setup

1. **Duplicate the previous project:**
   ```bash
   cp -r alx-graphql-0x02 alx-graphql-0x03
   cd alx-graphql-0x03/alx-rick-and-morty-app
# 🚀 ErrorBoundary Component

## 📘 Objective
Implement an **ErrorBoundary** class component in TypeScript to catch and handle JavaScript errors within the React (Next.js) application.

---

## 🧩 Project Setup

1. **Duplicate the previous project:**
   ```bash
   cp -r alx-graphql-0x02 alx-graphql-0x03
   cd alx-graphql-0x03/alx-rick-and-morty-app
Create the component file:

mkdir -p components
touch components/ErrorBoundary.tsx

💻 Implementation
File: components/ErrorBoundary.tsx
import React, { ReactNode } from "react";

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Oops, there is an error!
          </h2>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

🧠 Integration (Next.js)

In a Next.js app, you can wrap all pages in the ErrorBoundary using the _app.tsx file.

File: pages/_app.tsx
import type { AppProps } from "next/app";
import ErrorBoundary from "../components/ErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;


✅ This ensures that any runtime error in your pages or components is caught and displayed by the ErrorBoundary.

🧪 Testing the ErrorBoundary

To test if it works, throw an error in one of your page components:

Example: pages/index.tsx
export default function Home() {
  throw new Error("Test error from Home page");

  return <div>Welcome to the Rick and Morty App!</div>;
}


When you visit the page, you should see:

“Oops, there is an error!”
and a Try again? button.

🧰 Commands

Run the development server:

npm run dev


Then open your app at:

http://localhost:3000

📁 Repository Structure
alx-graphql-0x03/
└── alx-rick-and-morty-app/
    ├── components/
    │   └── ErrorBoundary.tsx
    ├── pages/
    │   ├── _app.tsx
    │   └── index.tsx
    ├── package.json
    ├── README.md
    └── ...