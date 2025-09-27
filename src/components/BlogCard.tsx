import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  slug: string
  className?: string
}

export default function BlogCard({ title, excerpt, image, date, slug, className = "" }: BlogCardProps) {
  return (
    <article className={`blog-card ${className}`}>
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="blog-content">
        <h3>
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <p>{excerpt}</p>
        <span className="blog-date">{date}</span>
        <Link href={`/blog/${slug}`} className="read-more">
          Read More →
        </Link>
      </div>
    </article>
  )
}