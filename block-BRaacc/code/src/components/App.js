import React from "react";
import Header from './Header';
import Home from './Home';
import User from './User';
import Repo from './Repo';
import Follower from './Follower';
import Following from './Following';

import { BrowserRouter, Route, Switch } from "react-router-dom"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "user": "nnnkit"
    }
  }

  onChangeHandler = ({ target }) => {
    this.setState({
        "user": target.value
      })
  }

  render () {
    return (
		<BrowserRouter>
			<Header />
        <Switch>
          <Route path="/user">
            <Route path="/user/:username" component={User} />
            <Route path="/user/:username/repos" component={Repo} />
            <Route path="/user/:username/followers" component={Follower} />
            <Route path="/user/:username/following" component={Following} />
          </Route>
          <Route path="/">
					  <Home user={this.state.user} onChangeHandler={this.onChangeHandler} submitHandler={this.submitHandler} />
          </Route>
        </Switch>
		</BrowserRouter>
	);
  }
}

export default App;