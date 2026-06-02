import { Breadcrumbs } from "../components/breadcrumbs.tsx"
import Markdown from 'react-markdown'

interface Properties {
  title: string;
  subtitle: string;
  content: string;
}

export function Content({ title, subtitle, content }: Properties) {
  return (
    <div className="content">
      <Breadcrumbs breadcrumbs={[title, subtitle]} />
      <div className="content">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}
