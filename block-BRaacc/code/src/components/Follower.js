import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

import fetchFn from "../utils/fetch";

class Follower extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.match.params.username,
			userGitHubFollowerData: null,
		};
	}

	async componentDidMount() {
		const userGitHubFollowerData = await fetchFn(this.state.user, "/followers");
		this.setState({
			userGitHubFollowerData,
		});
  }

	render() {
		const followers = this.state.userGitHubFollowerData;

		if (!followers) {
			return <Loader />;
		}

		return (
			<section className="p-4">
				<h3 className="text-2xl font-extrabold m-4 text-gray-700 uppercase text-center">{this.state.user} Follower's</h3>
				<ul className="flex flex-wrap my-2 justify-between">
					{followers.map((follower) => (
						<li key={follower.id} className="my-2 flex items-center w-72">
							<img src={follower.avatar_url} alt={`avatar ${follower.login}`} className="w-20 h-20 rounded-full inline-block" />
							<Link to={`/user/${follower.login}`} className="mx-4">{`@${follower.login}`}</Link>
						</li>
					))}
				</ul>
			</section>
		);
	}
}

export default Follower;
