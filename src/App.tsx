import './App.css'
import { NavBar } from './components'
import { Home } from './page'
import store from './redux/store'
import { LayoutContainer } from './styled-component'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
     <NavBar/>
     <LayoutContainer>
      <Home/>
     </LayoutContainer>
     
    </Provider>
  )
}

export default App
