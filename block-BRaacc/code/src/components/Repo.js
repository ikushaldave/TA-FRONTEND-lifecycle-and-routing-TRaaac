import React from "react";
import Loader from "./Loader";

import fetchFn from "../utils/fetch";

class Repo extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      user: props.match.params.username,
			userGitHubRepoData: null,
		};
	}

	async componentDidMount() {
    const userGitHubRepoData = await fetchFn(this.state.user, "/repos");
		this.setState({
			userGitHubRepoData,
		});
	}

  render () {
    const repos = this.state.userGitHubRepoData;

		if (!repos) {
      return <Loader />;
    }

		return (
			<section className="p-4">
				<h3 className="text-2xl font-extrabold m-4 text-gray-700 uppercase text-center">{this.state.user} Repo's</h3>
				<ul className="flex flex-wrap my-2 justify-between">
					{repos.map((repo) => (
						<li key={repo.id} className="my-2 w-1/3">
							&#128073;
							<a href={repo.html_url} target="_blank" className="mx-2">
								{repo.full_name}
							</a>
						</li>
					))}
				</ul>
			</section>
		);
	}
}

export default Repo;
