import { Content } from "../components/content.tsx"
import { Link, useParams } from "react-router-dom"
import { Breadcrumbs } from "../components/breadcrumbs.tsx"

const contents = import.meta.glob('../content/snippets/*', { eager: true, query: '?raw' }) as Record<string, { default: string }>

export function Snippets() {
  const slugs = Object.keys(contents).map(path => path.replace('../content/snippets/', ''))
  return (
    <div className="snippets">
      <Breadcrumbs breadcrumbs={['snippets']} />
      <div className="dir">
        {slugs.map(slug => (
          <div key={slug}>
            <span>-rw-r--r-- </span>
            <Link key={slug} to={`/snippets/${slug}`}>{slug}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Snippet() {
  const { slug } = useParams<{ slug: string }>()
  const content = contents[`../content/snippets/${slug}`]
  return (
    <Content title="snippets" subtitle={slug ?? ''} content={content.default ?? ''} />
  )
}
