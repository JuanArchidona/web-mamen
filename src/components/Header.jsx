import { useState, useEffect } from 'react'
import './Header.css'

export default function Header({ waLink }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
            <div className="container nav-flex">
                <div className="logo">
                    La Luz de <span>Carmen</span>
                </div>
                <a href={waLink} className="header-phone" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-phone-alt" />
                    <span>656 32 03 03</span>
                </a>
            </div>
        </header>
    )
}
