import { RouterProvider } from "react-router-dom"
import { routers } from "./routers"
import { HelmetProvider } from "react-helmet-async"
import "./App.css"

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={routers} />

    </HelmetProvider>
  )
}

export default App
