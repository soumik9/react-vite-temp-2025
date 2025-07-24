import './App.css'
import { Router } from './libs'
import { Provider } from 'react-redux'
import { store } from './redux-rtk/app/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
