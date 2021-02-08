import { Link } from "react-router-dom";

function Home (props) {
  return (
		<div className="text-center m-16">
			<label htmlFor="github-username" className="text-2xl text-green-600 uppercase m-4">
				Enter Your GitHub Username:
			</label>
			<input type="search" className="py-2 px-3 m-4 border-2 rounded-md focus-within:outline-none focus-within:border-gray-800" value={props.user} onChange={ props.onChangeHandler } name="github-username" id="github-username" />
      <Link to={`/user/${props.user}`} className="py-2 px-3 rounded-sm bg-blue-300 text-black uppercase cursor-pointer inline-block">Search</Link>
		</div>
  );
}

export default Home;