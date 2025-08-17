import { Route, Routes } from 'react-router'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Protectedroute from './pages/Protectedroute.jsx'

function App() {

  return <>
  <Routes>
    <Route path='/' element={<Protectedroute>
     <Home />
    </Protectedroute>}>
    </Route>
  <Route path='/signup' element={<Signup />}/>
  <Route path='/login' element={<Login />}/>
  </Routes>
    </>
}

export default App
