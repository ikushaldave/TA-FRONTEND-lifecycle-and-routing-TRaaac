import Home from "./Home";
import TopRepo from "./Top-Repos";
import Battle from "./Battle";
import BattleFiled from "./BattleField"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BattleField from "./BattleField";


function App () {
  return (
		<BrowserRouter>
			<Switch>
				<Route path="/github-top-repos">
					<TopRepo />
				</Route>
				<Route path="/battle">
					<Battle />
				</Route>
				<Route path="/battlefield" component={BattleField} />
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
  );
}

export default App;