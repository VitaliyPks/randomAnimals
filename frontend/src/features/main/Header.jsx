import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="opacity-90 rounded-b-lg mx-auto w-4/5 h-12 flex justify-center px-5 bg-gray-500 items-center text-white">
      <Link to='/' className='mx-auto'>Home</Link>
      <Link to='/dog' className='mx-auto'>Dogs</Link>
      <Link to='/cat' className='mx-auto'>Cats</Link>
      <Link to='/fox' className='mx-auto'>Fox</Link>
      <Link to='/insults' className='mx-auto'>Insults</Link>
    </nav>
  );
}

export default Header;
