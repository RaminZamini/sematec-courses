import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { HomePage, NotFoundPage, TutorialsPage } from "./pages"
import { ReactModules } from "./views/tutorials/modules/react-modules"
import { ReactComponent } from "./views/tutorials/react-components/react-component"
import { UsingCSS } from "./views/tutorials/css-in-react/using-css"
import { UsingState } from "./views/tutorials/state-in-react/using-state"
import FCLifecycle from "./views/tutorials/fc-lifecyle"
import { TeachersPage } from "./pages"

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
          {
            path: "using-state",
            element: <UsingState />,
          },
          {
            path: "fc-lifecycle",
            element: <FCLifecycle />,
          },
        ],
      },
      {
        path: "teachers",
        element: <TeachersPage />,
      },
    ],
  },
])
