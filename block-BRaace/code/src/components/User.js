function User (props) {
	return (
		<div className="w-1/5 border-2 rounded-lg border-gray-70 my-8 text-center shadow-lg">
			<h2 className="text-xl text-center text-gray-600 my-4 font-semibold uppercase">{props.isHighest ? "Winner" : "Loser"}</h2>
			<img src={props.user.avatar_url} alt="" className="w-28 h-28 rounded-full inline-block" />
			<a href={props.user.html_url} target="_blank" rel="noopener noreferrer" className="block my-4">{`@${props.user.login}`}</a>
			<h4 className="my-4">SCORE: {props.score}</h4>
			<div className="py-4 px-8 text-left">
				<p className="my-2">
					<i className="fas fa-user mx-2 text-green-400"></i>
					{props.user.name}
				</p>
				<p className="my-2">
					<i className="fas fa-book-user mx-2 text-green-400"></i>
					{props.user.bio}
				</p>
				<p className="my-2">
					<i className="fas fa-location mx-2 text-green-400"></i>
					{props.user.location}
				</p>
				<p className="my-2">{props.user.followers} followers</p>
				<p className="my-2">{props.user.following} following</p>
				<p className="my-2">{props.user.public_repos} public repo's</p>
				<p className="my-2">{props.user.public_gists} public gist's</p>
			</div>
		</div>
	);
}

export default User;