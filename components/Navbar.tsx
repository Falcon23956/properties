
import Link from 'next/link';
export default function Navbar(){
  return (
    <nav>
      <div className="inner container">
        <Link href="/" className="logo"><img src="/logo.png" alt="logo"/><span style={{fontWeight:700,color:'#0A3125'}}<div className="logo">CRESTVISTA <span className="handwrite">PROPERTIES LTD</span></div>
/span></Link>
        <div className="nav-links" aria-hidden>
          <Link href="/properties">Properties</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
