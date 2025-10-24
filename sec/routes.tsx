import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import Community from "./pages/Community";
import Servers from "./pages/Servers";
import Features from "./pages/Features";
import Global from "./pages/Global";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Support from "./pages/Support";
import Changelog from "./pages/Changelog";
import Status from "./pages/Status";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "servers",
        element: <Servers />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "global",
        element: <Global />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "changelog",
        element: <Changelog />,
      },
      {
        path: "status",
        element: <Status />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "cookies",
        element: <Cookies />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const basename = (window as unknown as { __APP_BASENAME__?: string }).__APP_BASENAME__ || "/";
export const router = createBrowserRouter(routes, { basename });