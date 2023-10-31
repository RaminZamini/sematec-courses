import React from "react"
import { Footer, Header } from "../components"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{minHeight: '70vh'}}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
