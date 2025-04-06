import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/Home";

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
          element: <div>About</div>
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
