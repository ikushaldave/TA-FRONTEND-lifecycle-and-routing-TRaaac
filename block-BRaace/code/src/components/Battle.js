import React from "react";
import { Link } from "react-router-dom";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userOne: "",
      userTwo: "",
      userOneProfile: null,
      userTwoProfile: null,
      error: false
    }
  }

  async fetchFn (user) {
    const githubUser = await fetch(`https://api.github.com/users/${user}`);
    const githubUserJSON = await githubUser.json();
    return githubUserJSON;
  }

  changeHandler = ({target}) => {
    this.setState({
      [target.dataset.id]: target.value
    })
  }

  clickHandler = async ({ target }) => {
    console.log(target.dataset);
    const { user, getuser } = target.dataset;
    const userInfo = await this.fetchFn(this.state[user]);

    this.setState((previous) => {
      return (userInfo.message) ? {[user]: "", error: true} : {[getuser]: userInfo, error: false}
    })
  }

  displayUser (user, whichUser, whichUserProfile, userInfo = null) {
    if (userInfo) {
      return (
        <>
          <div className="flex justify-center items-center">
            <img src={userInfo.avatar_url} alt="" className="w-12 h-12 object-cover rounded-full" />
            <h4 className="text-gray-700 mx-4 text-lg">{`@${userInfo.login}`}</h4>
          </div>
        </>
      )
    } else {
      return (
			<>
				<div>
					<input type="text" className="focus:outline-none px-2 py-1 border-2 border-gray-700 mx-2 rounded-md" value={user} data-id={whichUser} placeholder={whichUser} onChange={this.changeHandler} />
          <button className="bg-blue-400 px-2 py-1 rounded-sm font-medium text-white my-2" data-user={whichUser} data-getuser={whichUserProfile} disabled={user ? false : true} onClick={this.clickHandler}>
            SUBMIT
          </button>
				</div>
			</>
		);
    }
  }

  render () {
    return (
    <main className="container mx-autos text-center p-4">
      <h2 className="text-gray-700 text-3xl font-extrabold uppercase">Github Battle</h2>
			<Instruction />
			<div className="my-8">
				<h2 className="text-gray-700 text-3xl font-extrabold uppercase my-4">Players</h2>
				<h3 className="text-red-500 text-lg text-center m-4">{this.state.error ? "User Not Found" : ""}</h3>
				<div className="flex flex-wrap justify-center items-center">
					<div className="mx-2">{this.state.userOneProfile ? this.displayUser(null, null, null, this.state.userOneProfile) : this.displayUser(this.state.userOne, "userOne", "userOneProfile")}</div>
					<div className="mx-2">{this.state.userTwoProfile ? this.displayUser(null, null, null, this.state.userTwoProfile) : this.displayUser(this.state.userTwo, "userTwo", "userTwoProfile")}</div>
				</div>
				<Link to={{pathname: "/battlefield", state: {obj: this.state}}} className={(this.state.userOneProfile && this.state.userTwoProfile) ? "battle-btn" : "hidden"} >🔥 Battle 🔥</Link>
			</div>
		</main>
	);
  }
}

function Instruction () {
  return (
    <>
			<div className="my-10">
          <h3 className="text-2xl text-gray-500 font-semibold uppercase">** Instruction **</h3>
          <div className="flex justify-center p-4">
            <div className="w-1/4">
              <h4 className="m-4 text-xl font-bold text-blue-500">Enter Two Github User</h4>
              <i className="fal fa-user-friends bg-gray-100 text-9xl px-4 py-6 text-yellow-400 rounded-lg"></i>
            </div>
            <div className="w-1/4">
              <h4 className="m-4 text-xl font-bold text-blue-500">Battle</h4>
              <i className="fas fa-helmet-battle bg-gray-100 text-9xl px-4 py-6 text-yellow-400 rounded-lg"></i>
            </div>
            <div className="w-1/4">
              <h4 className="m-4 text-xl font-bold text-blue-500">See the Winner</h4>
              <i className="fas fa-trophy-alt bg-gray-100 text-9xl px-4 py-6 text-yellow-400 rounded-lg"></i>
            </div>
				  </div>
			  </div>
      </>
  )
}

export default Battle;