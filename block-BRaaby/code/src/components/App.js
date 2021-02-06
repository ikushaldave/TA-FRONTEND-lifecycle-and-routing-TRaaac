import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      current: {}
    }
  }

  clickHandler = ({ target }) => {
    const id = target.dataset.id;
    const profile = this.state.data[0];
    let currentValue = null;
    switch (id) {
		case "email":
			currentValue = {
				field: id,
				value: profile.email,
			};
			break;
		case "age":
			currentValue = {
				field: id,
				value: profile.dob.age,
			};
			break;
		case "location":
			currentValue = {
				field: id,
				value: `${profile.email}`,
			};
			break;
		default:
			currentValue = {
				field: id,
				value: `${profile.f}`,
			};
			break;
	}

    this.setState({
      currentValue
    })
  }

  componentDidMount () {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }))
  }

  render () {
    if (!this.state.data) {
      return (
			<div class="stage">
				<div class="dot-elastic"></div>
			</div>
		);
    }

    const profile = this.state.data[0];
    return (
		<div className="container">
			<div className="w-full flex justify-center items-center">
				<div className="w-1/2 bg-gray-200 text-center p-6">
					<img src={profile.picture.large} alt={profile.gender} className="rounded-full" />
					<div className="my-4">
						<h2>
							My Name is <span className="text-2xl block">{`${profile.name.first} ${profile.name.last}`}</span>
						</h2>
						<div onClick={this.clickHandler}>
							<i className="fas fa-user p-3 m-4" data-id="name"></i>
							<i className="fas fa-envelope-open p-3 m-4" data-id="email"></i>
							<i className="fas fa-calendar-times p-3 m-4" data-id="age"></i>
							<i className="fas fa-map-marked-alt p-3 m-4" data-id="location"></i>
							<i className="fas fa-phone p-3 m-4" data-id="contact"></i>
							<i className="fas fa-lock p-3 m-4" data-id="password"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
  }
}

export default App;