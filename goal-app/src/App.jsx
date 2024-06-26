import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Header from './components/Header'
import Dashboard from './pages/Dashbord'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {

  return (
    <>
     <Router>
      <div className=''>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
     </Router>
     <ToastContainer />
    </>
  )
}

export default App
