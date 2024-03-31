import { OnTapLT } from "./pages/OnTapLT";
import { ThiLT } from "./pages/ThiLT";
import { Home } from "./pages/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/hoc-ly-thuyet',
    element: <OnTapLT />
  },
  {
    path: '/thi-ly-thuyet',
    element: <ThiLT />
  }
];

export default AppRoutes;
