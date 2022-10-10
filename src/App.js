import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import Jobs from './pages/Jobs';

function App() {
  return (
    <>
      <Nav>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='jobs' element={<Jobs/>}/>
        </Routes>
      </Nav>
    </>
  );
}

export default App;
