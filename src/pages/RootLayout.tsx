import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react';
import { DARK_BACKGROUND, LIGHT_BACKGROUND } from '../constants/colors';

function RootLayout() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <Header />
      <main className={`flex flex-1 min-h-screen flex-col 
                      ${darkMode ? DARK_BACKGROUND : LIGHT_BACKGROUND}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout