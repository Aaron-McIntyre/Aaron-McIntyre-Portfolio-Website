import Link from "next/link";

const Navbar = () => {


  return (

    <nav className="flex items-center w-full h-16 px-4 sticky">

      <div className="w-1/5 text-xl font-bold">
        Aaron McIntyre
      </div>

      <div className="w-4/5 flex justify-end space-x-6">
        <Link href="/" className="hover:text-[var(--text-muted)]">Home</Link>
        <Link href="/" className="hover:text-[var(--text-muted)]">Portfolio</Link>
        <Link href="/" className="hover:text-[var(--text-muted)]">About</Link>
        <Link href="/" className="hover:text-[var(--text-muted)]">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;