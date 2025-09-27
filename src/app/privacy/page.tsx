import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { gameConfig, getCanonicalUrl } from '@/config/gameConfig'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Privacy Policy - ${gameConfig.site.title}`,
  description: `Privacy policy for ${gameConfig.site.title}. Learn how we collect, use, and protect your information.`,
  alternates: {
    canonical: getCanonicalUrl('/privacy')
  }
}

export default function PrivacyPolicyPage() {
  return (
    <main className="blog-article">
      <Navbar />
      
      <article className="container">
        <header className="article-header">
          <h1>Privacy Policy</h1>
          <p className="article-excerpt">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </header>

        <div className="article-content">
          <div className="article-text">
            <p><strong>Last updated:</strong> September 27, 2025</p>

            <h2>Information We Collect</h2>
            
            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the site, and information about how you interact with the site.
            </p>

            <h3>Analytics Information</h3>
            <p>
              We use Google Analytics to help us understand how our customers use the site. You can read more about how Google uses your personal information here: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">Google Privacy Policy</a>.
            </p>

            <h2>How We Use Your Information</h2>
            
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service and support</li>
              <li>Send you marketing and promotional communications</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            
            <h3>What Are Cookies</h3>
            <p>
              Cookies are small data files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>

            <h3>How We Use Cookies</h3>
            <p>We use cookies for several purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website</li>
              <li><strong>Advertising Cookies:</strong> These are used to deliver relevant advertisements</li>
            </ul>

            <h2>Third-Party Services</h2>
            
            <h3>Google AdSense</h3>
            <p>
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">Google Ads Settings</a>.
            </p>

            <h3>YouTube Embedded Videos</h3>
            <p>
              Our website displays YouTube video thumbnails and provides links to YouTube content. Videos are only loaded from YouTube when you explicitly click to play them. We use YouTube&apos;s privacy-enhanced mode (youtube-nocookie.com) which doesn&apos;t store cookies unless you play a video. Please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">YouTube&apos;s Privacy Policy</a> for more information about how YouTube handles your data when you interact with their videos.
            </p>
            
            <h3>Third-Party Cookie Protection</h3>
            <p>
              We&apos;ve implemented privacy-friendly video embedding to minimize third-party cookies. YouTube videos only load when you choose to play them, giving you control over when your data is shared with YouTube. We display static video thumbnails until you decide to watch a video.
            </p>

            <h2>Data Retention</h2>
            
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy. We will retain and use your information to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>

            <h2>Your Rights</h2>
            
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> You can request access to your personal information</li>
              <li><strong>Rectification:</strong> You can request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
              <li><strong>Portability:</strong> You can request transfer of your information</li>
              <li><strong>Objection:</strong> You can object to processing of your information</li>
            </ul>

            <h2>Children&apos;s Privacy</h2>
            
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
            </p>

            <h2>Security</h2>
            
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
            </p>

            <h2>International Data Transfers</h2>
            
            <p>
              Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws than your country. We ensure appropriate safeguards are in place to protect your information.
            </p>

            <h2>Updates to This Policy</h2>
            
            <p>
              We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated policy on this page and update the &ldquo;Last updated&rdquo; date above.
            </p>

            <h2>Contact Information</h2>
            
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us through our website or at the contact information provided in our Terms of Service.
            </p>

            <h3>Disclaimer</h3>
            <p>
              This website is a fan site and is not affiliated with or endorsed by {gameConfig.game.developer}, Supergiant Games, or any other official entities associated with {gameConfig.game.name}. All game-related content, trademarks, and copyrights belong to their respective owners.
            </p>
          </div>
        </div>
      </article>

      <Footer />
      <BackToTop />
    </main>
  )
}