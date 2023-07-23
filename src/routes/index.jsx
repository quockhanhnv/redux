// Layouts

// Pages
import ReduxDemoPage from "../pages/ReduxDemo/ReduxDemoPage";
import ToogleDarkModePage from "../pages/ToogleDarkMode/ToogleDarkModePage";
import HackerNewsPage from "../pages/HackerNews/HackerNewsPage";

// Public routes
const publicRoutes = [
  { path: "/", component: ReduxDemoPage },
  { path: "/toogle-dark-mode", component: ToogleDarkModePage },
  { path: "/hacker-news", component: HackerNewsPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
