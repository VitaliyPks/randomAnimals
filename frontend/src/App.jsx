import { Route, Routes } from 'react-router-dom';
import Insults from './Pages/Insult/Insults.jsx';
import Header from './Components/Header/Header.jsx';
import Body from './Components/Body/Body.jsx';
import Home from './Pages/Home/Home.jsx';
import Dog from './Pages/Dog/Dog.jsx';
import Cat from './Pages/Cat/Cat.jsx';
import Fox from './Pages/Fox/Fox.jsx';

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
