import './App.css'
import { Router } from './libs'
import { NotifyContainer } from './libs/helper'

const App = () => {

  //   const authChecked = useAuthCheck();

  // if (!authChecked)
  //   return <div className='h-screen w-full flex flex-col justify-center items-center'>
  //     <img src={imgAssets.sidebarLogo} alt="logo" className="animate-pulse mb-1.5" />
  //     <p className='text-text-600'>Please wait...</p>
  //   </div>;

  return (
    <>
      <Router />
      <NotifyContainer />
    </>
  )
}

export default App
