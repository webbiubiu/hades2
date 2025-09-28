'use client'

import Image from 'next/image'
import { useState } from 'react'

interface CharacterCardProps {
  name: string
  displayName?: string
  title: string
  description: string
  image: string
  fullImage?: string  // 添加大图参数
  className?: string
}

export default function CharacterCard({ name, displayName, title, description, image, fullImage, className = "" }: CharacterCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Character Card */}
      <div 
        className={`character-card-container ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="character-card">
          <div className="character-image-container">
            <Image
              src={image}
              alt={name}
              width={200}
              height={200}
              className="character-image"
            />
          </div>
          <div className="character-name">
            <span className="character-label">HADES 2</span>
            <span className="character-title">{displayName || name}</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="character-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="character-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="character-modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <div className="character-modal-content">
              <div className="character-modal-image">
                <Image
                  src={fullImage || image}
                  alt={name}
                  width={400}
                  height={500}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="character-modal-info">
                <h2 className="character-modal-name">{displayName || name}</h2>
                <h3 className="character-modal-title">{title}</h3>
                <p className="character-modal-description">{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}