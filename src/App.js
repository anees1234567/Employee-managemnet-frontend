import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/register/Register';
import Edit from './pages/Edit/Edit';
import Profile from './pages/profile/Profile';
import Main from './pages/Main/Main';
import PNF from './pages/pnf/PNF';
import Header from './Componets/Header/Header';
import Footer from './Componets/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='*' element={<PNF/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
