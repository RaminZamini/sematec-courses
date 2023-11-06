import React, {useState} from 'react'

const ThemeSwitcher = () => {
    const [theme,setTheme] = useState('light')
    const toggleThemeHandler = () => {
    if (theme === 'light') {
        setTheme('dark')
  } else if (theme === 'dark') {
        setTheme('light')
}

  return (
    <button onClick={toggleThemeHandler}>
        <main className={`${theme}`}>
        </main>
    </button>
  )
}
}

export default ThemeSwitcher