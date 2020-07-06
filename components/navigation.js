import Link from 'next/Link';

function Navigation(){
    return ( 
    <nav className="navigation">
        <Link href="/">
            <a className="link">Ana sayfa</a>
        </Link>
        <Link href="/about">
            <a className="link">About</a>
        </Link>
    </nav>
    )
}

export default Navigation