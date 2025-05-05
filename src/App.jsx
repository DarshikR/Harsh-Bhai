import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/Home";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tours from "./pages/Tours";
import Destination from "./pages/Destination";
import Blog from "./pages/Blog";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/tours',
          element: <Tours />
        },
        {
          path: '/destination',
          element: <Destination />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
