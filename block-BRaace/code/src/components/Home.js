import { Link } from "react-router-dom"

function Home () {
  return (
		<div className="text-center">
			<h1 className="uppercase text-2xl m-4">Assignment</h1>
			<Link to="/github-top-repos" className="inline-block m-4 bg-blue-300 font-bold rounded px-2 py-1">
				TOP GITHUB REPOS
			</Link>
			<Link to="/battle" className="inline-block m-4 bg-blue-300 font-bold rounded px-2 py-1">
				GITHUB BATTLE
			</Link>
		</div>
  );
}

export default Home;