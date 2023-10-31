import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { HomePage, NotFoundPage, TutorialsPage } from "./pages"
import { ReactModules } from "./views/tutorials/modules/react-modules"
import { ReactComponent } from "./views/tutorials/react-components/react-component"
import { UsingCSS } from "./views/tutorials/css-in-react/using-css"

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "tutorials",
        element: <TutorialsPage />,
        children: [
          {
            path: "react-modules",
            element: <ReactModules />,
          },
          {
            path: "react-components",
            element: <ReactComponent />,
          },

          {
            path: "using-css",
            element: <UsingCSS />,
          },
        ],
      },
    ],
  },
])
