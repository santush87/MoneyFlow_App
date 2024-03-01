import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'

function RootLayout() {
  return (
    <>
      <Header />
      <main className='flex flex-1 flex-col justify-center bg-slate-100'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout