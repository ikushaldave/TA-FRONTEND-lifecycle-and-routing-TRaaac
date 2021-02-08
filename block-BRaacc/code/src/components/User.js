import React from "react";
import Loader from "./Loader"
import { Link } from "react-router-dom";

import fetchFn from "../utils/fetch"

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userGitHubData: null
    }
  }

  async componentDidMount () {
    const { username } = this.props.match.params
    const userGitHubData = await fetchFn(username)
    console.log(userGitHubData);
    this.setState({
      userGitHubData
    })
	}

	async componentDidUpdate () {
		const { username } = this.props.match.params
    const userGitHubData = await fetchFn(username)
    console.log(userGitHubData);
    this.setState({
      userGitHubData
    })
	}

	render () {
    const user = this.state.userGitHubData;

    if (!user) {
      return <Loader />;
    }

		return (
			<section>
				<div className="text-center border-b-2 border-gray-400 p-4">
					<img src={user.avatar_url} alt={`avatar ${user.login}`} className="w-28 h-28 rounded-full inline-block border-gray-200 border-2" />
					<h2 className="text-xl text-gray-600 m-4">{`${user.name} (@${user.login}) `}</h2>
					<p>{user.bio}</p>
				</div>
				<div className="flex justify-evenly items-center p-4">
					<Link to={`/user/${user.login}/repos`} className="text-center ">
						<span className="text-xl text-gray-700 font-extrabold">{user.public_repos}</span>
						<p className="uppercase">Public Repos</p>
					</Link>
					<Link to={`/user/${user.login}/followers`} className="text-center ">
						<span className="text-xl text-gray-700 font-extrabold">{user.followers}</span>
						<p className="uppercase">Followers</p>
					</Link>
					<Link to={`/user/${user.login}/following`} className="text-center ">
						<span className="text-xl text-gray-700 font-extrabold">{user.following}</span>
						<p className="uppercase">Following</p>
					</Link>
				</div>
			</section>
		);
	}
}

export default User;