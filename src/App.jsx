
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/home"
import { Movies } from "./pages/Movies";
import MainLayOut from "./components/MainLayOut";


const router =createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
    ],
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
