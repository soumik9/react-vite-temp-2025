import './App.css'
import { RouterProvider } from 'react-router'
import { routes } from './libs/router/router'

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
