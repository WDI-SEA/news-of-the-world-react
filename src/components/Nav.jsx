import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="w-full bg-blue-200 p-5 text-blue-900 font-bold">
      <ul className="flex gap-4 m-auto justify-center">
        <li>
          <Link to="/top">Top Stories</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  )
}
