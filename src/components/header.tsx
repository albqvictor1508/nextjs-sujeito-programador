import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <Link href="/client">Client Posts</Link>
          <Link href="/posts">Server Posts</Link>
        </nav>
      </div>
    </header>
  );
}
 
export default Header;