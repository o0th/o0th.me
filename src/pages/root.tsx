import { Breadcrumbs } from "../components/breadcrumbs.tsx"

import { Link } from "react-router-dom"

export function Root() {
  return (
    <div className="root">
      <Breadcrumbs breadcrumbs={[]} />
      <div className="dir">
        <div>
          <span>drwxr-xr-x </span>
          <Link to="/snippets" className="font-bold">snippets</Link>
        </div>
        <div>
          <span>drwxr-xr-x </span>
          <Link to="/devlogs" className="font-bold">devlogs</Link>
        </div>
      </div>
    </div>
  )
}
