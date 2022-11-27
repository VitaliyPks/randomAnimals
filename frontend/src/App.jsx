import { Route, Routes } from 'react-router-dom';
import Insults from './features/Pages/Insult/Insults.jsx';
import Header from './features/main/Header.jsx';
import Body from './features/main/Body.jsx';
import Home from './features/main/Home.jsx';
import Cat from './features/Pages/Cat/Cat.jsx';
import Dog from './features/Pages/Dog/Dog.jsx';
import Fox from './features/Pages/Fox/Fox.jsx';

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
