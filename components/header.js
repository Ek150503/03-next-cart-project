import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <Link href='/'>Shop</Link>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <Link href='/stores'>Stores</Link>
          </li>
          <li>
            <Link href='/cart'>Cart</Link>
          </li>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
