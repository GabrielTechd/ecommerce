import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-50">
            <Link href='/' className='uppercase font-bold text-md h-12 flex items-center'>
                NextStore
            </Link>
        </nav>
    );
}
