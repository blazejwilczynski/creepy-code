import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Landing } from './components/Landing'
import { PortfolioCards } from './components/PortfolioCards';
import { About } from './components/About';


function App()  {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('current_theme', theme);
  })

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Landing />
      <PortfolioCards />
      <About theme={theme}/>
    </div>
  )
}

export default App
