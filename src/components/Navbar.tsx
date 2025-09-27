'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { gameConfig } from '@/config/gameConfig'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="gaming-navbar">
      <div className="gaming-nav-container">
        <div className="nav-logo">
          <Link href="/" className="gaming-nav-logo">
            {gameConfig.game.name}
          </Link>
        </div>
        <ul className={`gaming-nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              href="/" 
              className={`gaming-nav-link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/about" 
              className={`gaming-nav-link ${pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/blog" 
              className={`gaming-nav-link ${pathname === '/blog' ? 'active' : ''}`}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/videos" 
              className={`gaming-nav-link ${pathname === '/videos' ? 'active' : ''}`}
            >
              Videos
            </Link>
          </li>
        </ul>
        <div className="gaming-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}