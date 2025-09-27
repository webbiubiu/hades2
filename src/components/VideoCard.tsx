import { getYouTubeEmbed } from '@/config/gameConfig'

interface VideoCardProps {
  title: string
  description: string
  embedId: string
  className?: string
}

export default function VideoCard({ title, description, embedId, className = "" }: VideoCardProps) {
  return (
    <div className={`gaming-card ${className}`}>
      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={getYouTubeEmbed(embedId)}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="gaming-card-title">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}