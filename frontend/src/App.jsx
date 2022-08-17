import { Route, Routes } from 'react-router-dom';
import Cat from './features/otherPage/Cat.jsx';
import Dog from './features/otherPage/Dog.jsx';
import Fox from './features/otherPage/Fox.jsx';
import Insults from './features/otherPage/Insults.jsx';
import Header from './features/main/Header.jsx';
import Body from './features/main/Body.jsx';
import Home from './features/main/Home.jsx';

function App() {
  return (
    <Body>
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/dog' element={<Dog />} />
        <Route path='/cat' element={<Cat />} />
        <Route path='/fox' element={<Fox />} />
        <Route path='/insults' element={<Insults />} />
      </Routes>
    </Body>
  );
}

export default App;
