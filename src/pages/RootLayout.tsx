import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RootLayout() {
  return (
    <>
      <Header />
      <main className='flex flex-1 min-h-screen flex-col bg-gray-900'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout