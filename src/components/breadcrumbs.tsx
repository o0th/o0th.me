import { Link } from "react-router-dom"
import { Cursor } from "./cursor.tsx"

interface Properties {
  breadcrumbs: string[]
}

export function Breadcrumbs({ breadcrumbs }: Properties) {
  return (
    <div className="breadcrumbs">
      <p>
        <span>o0th@me: </span>
        <Link to="/" className="font-bold">~</Link>
        {breadcrumbs && breadcrumbs.map((crumb, index) => (
          <span key={index}>
            {(index !== breadcrumbs.length - 1) && (<span key={index}> / <Link to={`/${crumb}`}>{crumb}</Link></span>)}
            {(index === breadcrumbs.length - 1) && (<span key={index}> / {crumb}</span>)}
          </span>
        ))}
        <span> $ </span>
        <span><Cursor /></span>
      </p>
    </div>
  )
}
