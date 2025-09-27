interface GameInfoCardProps {
  title: string
  content: string
  icon?: string
  className?: string
}

export default function GameInfoCard({ title, content, icon, className = "" }: GameInfoCardProps) {
  return (
    <div className={`gaming-card ${className}`}>
      {icon && <div className="feature-icon mb-4">{icon}</div>}
      <h3 className="gaming-card-title">{title}</h3>
      <p className="gaming-card-content">{content}</p>
    </div>
  )
}