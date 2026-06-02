import { Content } from "../components/content.tsx"
import { Link, useParams } from "react-router-dom"
import { Breadcrumbs } from "../components/breadcrumbs.tsx"

const contents = import.meta.glob('../content/devlogs/*', { eager: true, query: '?raw' }) as Record<string, { default: string }>

export function Devlogs() {
  const slugs = Object.keys(contents).map(path => path.replace('../content/devlogs/', ''))
  return (
    <div className="devlogs">
      <Breadcrumbs breadcrumbs={['devlogs']} />
      <div className="dir">
        {slugs.map(slug => (
          <div key={slug}>
            <span>-rw-r--r-- </span>
            <Link key={slug} to={`/devlogs/${slug}`}>{slug}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Devlog() {
  const { slug } = useParams<{ slug: string }>()
  const content = contents[`../content/devlogs/${slug}`]
  return (
    <Content title="devlogs" subtitle={slug ?? ''} content={content.default ?? ''} />
  )
}
