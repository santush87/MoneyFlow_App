import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import RootLayout from './pages/RootLayout.tsx'
import Register from './pages/Register.tsx'
import store from './store/store.ts'
import Profile from './pages/Profile.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
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
