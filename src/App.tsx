import { useEffect } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import Faq from "./pages/faq/Faq";
import Features from "./pages/features/Features";
import Home from "./pages/home/Home";
import Sign from "./pages/sign/sign";
import Round from "./pages/round/Round";
import Round1 from "./pages/round/Round1";
import Round2 from "./pages/round/Round2";
import Round4 from "./pages/round/Round4";
import Portfolio from "./pages/portfolio/Portfolio";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRouter from "./components/layout/ProtectedRouter";
import { notFoundPath } from "./core/util/pathBuilder.util";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/features",
      element: <Features />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/round",
      element: <Round />,
    },
    {
      path: "/round1",
      element: <Round1 />,
    },
    {
      path: "/round2",
      element: <Round2 />,
    },
    {
      path: "/round4",
      element: <Round4 />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRouter>
          <Dashboard />
        </ProtectedRouter>
      ),
    },
    {
      path: "/sign",
      element: <Sign />,
    },
    {
      path: notFoundPath(),
      element: <NotFoundPage />,
    },
  ]);
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
