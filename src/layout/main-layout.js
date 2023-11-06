import React, { useState } from "react"
import { Footer, Header } from "../components"
import { Outlet } from "react-router-dom"
import * as themeConstants from "../utils/constants/theme-constant"

export const MainLayout = () => {
  const [theme, setTheme] = useState(themeConstants.LIGHT_THEME)

  const themeChangeHandler = () => {
    setTheme(
      theme === themeConstants.DARK_THEME ? themeConstants.LIGHT_THEME : themeConstants.DARK_THEME
    )
  }

  return (
    <div className={theme}>
      <Header onThemeChange={themeChangeHandler} />
      <main style={{ minHeight: "70vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
