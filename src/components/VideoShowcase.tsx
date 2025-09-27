interface VideoShowcaseProps {
  title?: string
  description?: string
  videoId: string
}

export default function VideoShowcase({ 
  title = "Hades2 – v1.0 Launch Trailer", 
  description = "Experience the epic return to the Underworld in this official launch trailer",
  videoId 
}: VideoShowcaseProps) {
  return (
    <section className="gaming-section gaming-section-dark">
      <div className="content-container">
        <div className="video-showcase">
          <div className="video-showcase-header">
            <h2 className="gaming-section-title">{title}</h2>
            {description && (
              <p className="video-showcase-description">{description}</p>
            )}
          </div>
          
          <div className="video-showcase-container">
            <div className="video-wrapper">
              <iframe 
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="video-iframe"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}