import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { MainRoutes } from './Pages/MainRoutes';

function App() {
  return (
    <BrowserRouter>
    <>
    <Navbar/> 
    <MainRoutes/>
    </>
    </BrowserRouter>
  );
}

export default App;
