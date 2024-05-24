import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';

function App() {
  return (
    <>
      <Routes>
        <Route path='/header' element={<Header />}></Route>
      </Routes>
    </>
  );
}

export default App;
