import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <Link href="/"><a className="logo">netflixroulette</a></Link>
            </div>
        </footer>
    )
}

export default Footer;