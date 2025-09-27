interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export default function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div className={`gaming-card ${className}`}>
      <div className="feature-icon mb-4">{icon}</div>
      <h3 className="gaming-card-title">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}