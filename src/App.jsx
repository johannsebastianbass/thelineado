import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Music,
  MessageCircle,
  ChevronDown,
  ExternalLink,
} from 'lucide-react'
import './index.css'

const base = import.meta.env.BASE_URL

const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#555" strokeWidth="1" />
    <circle cx="12" cy="12" r="5" stroke="#555" strokeWidth="1" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="#555" />
  </svg>
)

const YoutubeIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.35 29 29 0 0 0-.46-5.33z" stroke="#555" strokeWidth="1" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#555" />
  </svg>
)

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const streamingLinks = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/album/0sjHdJHolCQBeGvJcGVPx5?si=1&nd=1&dlsi=d444928b75374dd3',
    color: '#1DB954',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/album/nosso-fim-single/1677502353',
    color: '#FA243C',
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/us/album/417371977',
    color: '#A238FF',
  },
  {
    name: 'Tidal',
    url: 'https://tidal.com/album/281764306',
    color: '#00FFFF',
  },
]

function App() {
  const [showStreaming, setShowStreaming] = useState(false)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f5f0e8' }}>

      {/* ===== MAIN CONTENT ===== */}
      <motion.section
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          padding: '64px 24px 48px',
          textAlign: 'center',
        }}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Logo */}
        <motion.div variants={fadeUp} custom={0} style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
          <img
            src={`${base}images/logo-text.png`}
            alt="The Lineado"
            style={{
              width: 'clamp(200px, 50vw, 340px)',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={fadeUp} custom={1} style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '48px' }}>
          <a
            href="https://instagram.com/the.lineado"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              backgroundColor: '#0a0a0a',
              border: '1px solid #2a2a2a',
              borderRadius: '4px',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#888'
              e.currentTarget.querySelectorAll('[stroke]').forEach(el => el.setAttribute('stroke', '#ccc'))
              e.currentTarget.querySelectorAll('[fill="#555"]').forEach(el => el.setAttribute('fill', '#ccc'))
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#2a2a2a'
              e.currentTarget.querySelectorAll('[stroke]').forEach(el => el.setAttribute('stroke', '#555'))
              e.currentTarget.querySelectorAll('[fill="#ccc"]').forEach(el => el.setAttribute('fill', '#555'))
            }}
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCNewHRx3ZfHONuani8uTT0w"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              backgroundColor: '#0a0a0a',
              border: '1px solid #2a2a2a',
              borderRadius: '4px',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#888'
              e.currentTarget.querySelectorAll('[stroke]').forEach(el => el.setAttribute('stroke', '#ccc'))
              e.currentTarget.querySelectorAll('[fill="#555"]').forEach(el => el.setAttribute('fill', '#ccc'))
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#2a2a2a'
              e.currentTarget.querySelectorAll('[stroke]').forEach(el => el.setAttribute('stroke', '#555'))
              e.currentTarget.querySelectorAll('[fill="#ccc"]').forEach(el => el.setAttribute('fill', '#555'))
            }}
            aria-label="YouTube"
          >
            <YoutubeIcon size={20} />
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div variants={fadeUp} custom={2} style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
          <div style={{ width: '48px', height: '1px', backgroundColor: '#2a2a2a' }} />
        </motion.div>
        {/* Single Button */}
        <motion.div variants={fadeUp} style={{ marginBottom: '16px' }}>
          <button
            onClick={() => setShowStreaming(!showStreaming)}
            style={{
              width: '100%',
              border: '1px solid #2a2a2a',
              backgroundColor: 'transparent',
              color: '#f5f0e8',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.5s',
              fontFamily: 'inherit',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#f5f0e8'
              e.currentTarget.style.backgroundColor = '#f5f0e8'
              e.currentTarget.style.color = '#0a0a0a'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#2a2a2a'
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#f5f0e8'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Music size={18} strokeWidth={1.5} />
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '12px', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>
                  Single
                </span>
                <span style={{ fontSize: '16px', fontFamily: "'Playfair Display', serif", display: 'block' }}>
                  "Nosso Fim"
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: showStreaming ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} strokeWidth={1.5} />
            </motion.div>
          </button>

          <AnimatePresence>
            {showStreaming && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ border: '1px solid #2a2a2a', borderTop: 'none' }}>
                  {streamingLinks.map((link, idx) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 24px',
                        textDecoration: 'none',
                        color: '#c8c2b8',
                        transition: 'all 0.3s',
                        borderTop: idx > 0 ? '1px solid #1a1a1a' : 'none',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#141414'
                        e.currentTarget.style.color = '#f5f0e8'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#c8c2b8'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: link.color,
                            opacity: 0.6,
                          }}
                        />
                        <span style={{ fontSize: '14px', fontWeight: 300, letterSpacing: '0.05em' }}>
                          {link.name}
                        </span>
                      </div>
                      <ExternalLink size={14} style={{ color: '#3a3a3a' }} />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Button */}
        <motion.div variants={fadeUp}>
          <a
            href="https://wa.me/5547996665826"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              border: '1px solid #2a2a2a',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textDecoration: 'none',
              color: '#f5f0e8',
              transition: 'all 0.5s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#f5f0e8'
              e.currentTarget.style.backgroundColor = '#f5f0e8'
              e.currentTarget.style.color = '#0a0a0a'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#2a2a2a'
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#f5f0e8'
            }}
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            <span style={{ fontSize: '14px', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Contato / Booking
            </span>
          </a>
        </motion.div>
      </motion.section>

      {/* ===== GALLERY ===== */}
      <motion.section
        style={{ padding: '80px 16px', textAlign: 'center' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <motion.div
          variants={fadeUp}
          style={{
            columnCount: 2,
            columnGap: '12px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
          className="md-three-cols"
        >
          {[
            'IMG_9959.jpg', 'IMG_0010.jpg', 'IMG_0054.jpg',
            'IMG_0078.jpg', 'IMG_0080.jpg', 'IMG_0104.jpg',
            'IMG_0134.jpg', 'IMG_9961.jpg', 'IMG_9981.jpg',
          ].map((photo, i) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ marginBottom: '12px', breakInside: 'avoid' }}
            >
              <img
                src={`${base}images/${photo}`}
                alt="The Lineado"
                style={{
                  width: '100%',
                  display: 'block',
                  filter: 'grayscale(100%)',
                  opacity: 0.8,
                  transition: 'all 0.7s ease-out',
                }}
                loading="lazy"
                onMouseEnter={e => {
                  e.currentTarget.style.filter = 'grayscale(0%)'
                  e.currentTarget.style.opacity = '1'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = 'grayscale(100%)'
                  e.currentTarget.style.opacity = '0.8'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: '1px solid #1a1a1a', padding: '48px 24px' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <img
            src={`${base}images/logo.png`}
            alt="The Lineado"
            style={{ width: '40px', height: '40px', objectFit: 'contain', opacity: 0.3 }}
          />
          <div style={{ display: 'flex', gap: '24px' }}>
            <a
              href="https://instagram.com/the.lineado"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#3a3a3a', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c8c2b8'}
              onMouseLeave={e => e.currentTarget.style.color = '#3a3a3a'}
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCNewHRx3ZfHONuani8uTT0w"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#3a3a3a', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c8c2b8'}
              onMouseLeave={e => e.currentTarget.style.color = '#3a3a3a'}
              aria-label="YouTube"
            >
              <YoutubeIcon size={16} />
            </a>
          </div>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2a2a2a' }}>
            &copy; {new Date().getFullYear()} The Lineado
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
