
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import './styles';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/header' element={<Header />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
      </Routes>
    </>
  );
}

export default App;
