import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='nav-list'>
      <div className='logo'>
        <Image src='/vercel.svg' width={120} height={120} />
        <h1>Carlsama List</h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/About'>
        <a>About</a>
      </Link>
      <Link href='/List'>
        <a>Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
