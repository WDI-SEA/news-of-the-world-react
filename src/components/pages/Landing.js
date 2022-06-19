import { Link } from "react-router-dom"

function Landing() {
  return (
    <>
      <h1>News</h1>
      <Link to="/top">
        <span className="underline text-blue-600">Top Stories</span>
      </Link>
    </>
  )
}

export default Landing
