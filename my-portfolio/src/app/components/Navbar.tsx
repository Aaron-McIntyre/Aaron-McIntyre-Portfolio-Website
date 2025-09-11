"use client";
import Link from "next/link";
import navbarStyling from "./Navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (

    <nav className="flex items-center w-full h-16 px-4 sticky">

      <div className="w-full flex justify-end space-x-6">
        <Link href="/" 
          className={`link ${pathname === '/' ? `${navbarStyling.activePage}` : ''} hover:text-[var(--text-muted)]
          relative after:content-['']
          after:absolute 
          after:left-0 
          after:-bottom-0.5 
          after:w-0 
          after:h-[2px] 
          after:bg-[var(--text-muted)]
          after:transition-all 
          after:duration-300 
          hover:after:w-full`}>
            Home</Link>

        <Link href="/portfolio" 
          className={`link ${pathname === '/portfolio' ? `${navbarStyling.activePage}` : ''} hover:text-[var(--text-muted)]
          relative after:content-['']
          after:absolute 
          after:left-0 
          after:-bottom-0.5 
          after:w-0 
          after:h-[2px] 
          after:bg-[var(--text-muted)]
          after:transition-all 
          after:duration-300 
          hover:after:w-full`}>
            Portfolio</Link>
          
          <Link href="/about" 
          className={`link ${pathname === '/about' ? `${navbarStyling.activePage}` : ''} hover:text-[var(--text-muted)]
          relative after:content-['']
          after:absolute 
          after:left-0 
          after:-bottom-0.5 
          after:w-0 
          after:h-[2px] 
          after:bg-[var(--text-muted)]
          after:transition-all 
          after:duration-300 
          hover:after:w-full`}>
            About</Link>

          <Link href="/contact" 
          className={`link ${pathname === '/contact' ? `${navbarStyling.activePage}` : ''} hover:text-[var(--text-muted)]
          relative after:content-['']
          after:absolute 
          after:left-0 
          after:-bottom-0.5 
          after:w-0 
          after:h-[2px] 
          after:bg-[var(--text-muted)]
          after:transition-all 
          after:duration-300 
          hover:after:w-full`}>
            Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;