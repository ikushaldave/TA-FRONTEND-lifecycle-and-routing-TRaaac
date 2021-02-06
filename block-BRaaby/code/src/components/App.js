import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
			current: {
				filed: "name"
			}
    }
  }

  clickHandler = ({ target }) => {
    const id = target.dataset.id;
    const profile = this.state.data;
    let current = null;
    switch (id) {
		case "email":
			current = {
				field: id,
				value: profile.email,
			};
			break;
		case "age":
			current = {
				field: id,
				value: profile.dob.age,
			};
			break;
		case "street":
			current = {
				field: id,
				value: `${profile.location.street.number}, ${profile.location.street.name}`,
			};
			break;
		case "phone":
			current = {
				field: id,
				value: profile.phone,
			};
			break;
		case "password":
			current = {
				field: id,
				value: profile.login.password,
			};
			break;
		default:
			current = {
				field: id,
				value: `${profile.name.first} ${profile.name.last}`,
			};
			break;
	}

    this.setState({
		current,
	});
  }

  randomHandler = () => {
    this.randomUser()
  }

  randomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    this.setState({
		data: data.results[0],
		current: {
			field: "name",
			value: `${data.results[0].name.first} ${data.results[0].name.last}`,
		},
	});
  }

  componentDidMount () {
    this.randomUser()
  }

  render () {
    const profile = this.state;

    if (!this.state.data) {
      return (
			<div className="stage">
				<div className="dot-elastic"></div>
			</div>
		  );
    }

    return (
		<div className="container m-auto">
			<div className="w-full h-screen flex justify-center items-center">
				<div className="w-3/5 bg-gray-200 text-center p-6">
					<img src={profile.data.picture.large} alt={profile.gender} className="rounded-full inline-block" />
					<div className="my-4">
						<h2>
							My {profile.current.field} is <span className="text-2xl block">{profile.current.value}</span>
						</h2>
						<div onMouseMove={this.clickHandler}>
							<i className="fas fa-user p-3 m-4" data-id="name"></i>
							<i className="fas fa-envelope-open p-3 m-4" data-id="email"></i>
							<i className="fas fa-calendar-times p-3 m-4" data-id="age"></i>
							<i className="fas fa-map-marked-alt p-3 m-4" data-id="street"></i>
							<i className="fas fa-phone p-3 m-4" data-id="phone"></i>
							<i className="fas fa-lock p-3 m-4" data-id="password"></i>
						</div>
						<button className="bg-blue-300 p-2 text-white border-2 border-blue-700" onClick={this.randomHandler}>
							Random User
						</button>
					</div>
				</div>
			</div>
		</div>
	);
  }
}

export default App;