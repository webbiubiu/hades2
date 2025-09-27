import Link from 'next/link'
import { gameConfig } from '@/config/gameConfig'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-5">
        <div className="footer-content">
          {/* Site Info */}
          <div className="footer-section">
            <h3>{gameConfig.site.title}</h3>
            <p>
              {gameConfig.site.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/videos">Videos</Link></li>
            </ul>
          </div>

          {/* Game Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link 
                  href={gameConfig.links.steam} 
                  target="_blank"
                >
                  Steam Store
                </Link>
              </li>
              <li>
                <Link 
                  href={gameConfig.links.epic} 
                  target="_blank"
                >
                  Epic Games Store
                </Link>
              </li>
              <li>
                <Link 
                  href={gameConfig.links.official} 
                  target="_blank"
                >
                  Official Website
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; 2024 {gameConfig.site.title}. All rights reserved. Not affiliated with {gameConfig.game.developer}.
          </p>
        </div>
      </div>
    </footer>
  )
}