import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/Pages/MainPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/main-page' element={<MainPage />} />
    </Routes>    
    </>
  )
}

export default App
