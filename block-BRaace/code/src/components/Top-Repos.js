import React from "react";
import Loader from "./Loader";

class TopRepo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "all",
      githubJSON: null
    }
  }

  async fetchFn (lang = "all") {
    const githubResponse = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${lang}&sort=stars&order=desc&type=Repositories`);
    const githubJSON = await githubResponse.json()
    this.setState({
      githubJSON: githubJSON.items
    });
  }

  clickHandler = ({ target }) => {
    if (target.tagName === "BUTTON") {
      const lang = target.dataset.lang
      this.setState({
        active: lang
      })
      this.fetchFn(lang)
    }
  }

  componentDidMount () {
    this.fetchFn();
  }

  render () {

    const githubJSON = this.state.githubJSON;

    if (!githubJSON) {
      return (
        <>
          <Button active={this.state.active} />
          <Loader />
        </>
      );
    }

    return (
		<main className="container mx-auto p-4">
			<nav className="uppercase flex justify-around flex-wrap" onClick={this.clickHandler}>
				<Button active={this.state.active} />
			</nav>
			<div className="flex justify-between my-4 flex-wrap">
				{this.state.githubJSON.map((repo, index) => (
					<div className="col-32 border-2 border-gray-700 rounded-md my-4 relative" key={repo.id}>
						<div className="flex justify-around items-center text-center">
              <img src={repo.owner.avatar_url} alt={`avatar ${repo.name}`} className="w-28 h-28 rounded-full" />
              <span className="bg-blue-300 rounded-full absolute -top-3 -left-3 inline-block w-9 h-9 text-white text-xl font-extrabold">#{ ++index }</span>
							<div>
								<div className="border-b-2 border-gray-500 m-2">
									<h2 className="text-gray-600 text-xl capitalize font-extrabold">{repo.name}</h2>
									<a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-300">{` (@${repo.owner.login}) `}</a>
								</div>
								<div className="m-2 text-gray-500">
									<p>
										<i className="fas fa-star mx-2 text-blue-400"></i>
										{repo.stargazers_count} Stars
									</p>
									<p>
										<i className="fas fa-eye mx-2 text-blue-400"></i>
										{repo.watchers_count} Watchers
									</p>
									<p>
										<i className="fas fa-code-branch mx-2 text-blue-400"></i>
										{repo.forks} forks
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
  }
}

function Button (props) {
  return (
    ["all", "python", "javascript", "java", "ruby", "c#", "c", "c++", "go", "dart"].map((lang) => (
          <button className={ props.active === lang ? "btn active": "btn" } key={ lang } data-lang={ lang }>{ lang }</button>
    ))
  )
}

export default TopRepo;