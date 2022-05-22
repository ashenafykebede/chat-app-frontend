import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Home'
import { Wrapper } from './components/Wrapper';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Welcome />}/>
  <Route path='/channels/:id' element={<Wrapper />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
