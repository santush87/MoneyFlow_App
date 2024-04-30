import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import RootLayout from './pages/RootLayout.tsx'
import Register from './pages/Register.tsx'
import { store } from './store/store.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/Register', element: <Register /> },
    ],
  },
])

function App() {


  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
