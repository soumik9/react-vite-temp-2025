import './App.css'
import { Router } from './libs'
import { useAuthCheck } from './libs/hooks'

const App = () => {

  // authentication checking
  const authChecked = useAuthCheck();
  if (!authChecked) return <div className='text-center'>Checking authentication....</div>

  return (
    <>
      <Router />
    </>
  )
}

export default App
