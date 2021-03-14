import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className=""> 
                <h1>GameShare</h1>
            </div>
            
            <div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/dashboard"><a>Dashboard</a></Link>
                <Link href="/listings"><a>Listings</a></Link>
            </div>

            <div>
                <Link href="/signIn"><a>Sign In</a></Link>
            </div>
        </nav>
     );
}

export default Navbar;