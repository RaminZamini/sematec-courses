import React from "react"
import { Footer, Header, ThemeSwitcher } from "../components"
import { Outlet } from "react-router-dom"


export const MainLayout = () => {
    return (
    <>
      <Header />
      <main className={ThemeSwitcher()}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
