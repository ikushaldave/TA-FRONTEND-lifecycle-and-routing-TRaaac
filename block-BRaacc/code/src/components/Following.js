import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

import fetchFn from "../utils/fetch";

class Following extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.match.params.username,
			userGitHubFollowingData: null,
		};
	}

	async componentDidMount() {
		const userGitHubFollowingData = await fetchFn(this.state.user, "/following");
		this.setState({
			userGitHubFollowingData,
		});
	}

	render() {
		const followings = this.state.userGitHubFollowingData;

		if (!followings) {
			return <Loader />;
		}

		return (
			<section className="p-4">
				<h3 className="text-2xl font-extrabold m-4 text-gray-700 uppercase text-center">{this.state.user} Following's</h3>
				<ul className="flex flex-wrap my-2 justify-between">
					{followings.map((following) => (
						<li key={following.id} className="my-2 flex items-center w-72">
							<img src={following.avatar_url} alt={`avatar ${following.login}`} className="w-20 h-20 rounded-full inline-block" />
							<Link to={`/user/${following.login}`} className="mx-4">{`@${following.login}`}</Link>
						</li>
					))}
				</ul>
			</section>
		);
	}
}

export default Following;
