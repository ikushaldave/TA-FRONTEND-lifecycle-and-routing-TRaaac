import User from "./User"
import {Link} from "react-router-dom"

function BattleField (props) {
  const { userOneProfile, userTwoProfile } = props.location.state.obj;
  const userOneScore = score(userOneProfile);
  const userTwoScore = score(userTwoProfile);

  return (
		<>
			<h2 className="text-gray-700 text-3xl font-extrabold uppercase text-center">Github Battle</h2>
			<div className="flex justify-evenly">
				<User user={userOneProfile} score={userOneScore} isHighest={userOneScore > userTwoScore ? true : false} />
				<User user={userTwoProfile} score={userTwoScore} isHighest={userOneScore < userTwoScore ? true : false} />
			</div>
			<div className="text-center my-2">
				<Link to="/battle" className="battle-btn">
					Reset
				</Link>
			</div>
		</>
  );
}

function score (user) {
  return [user.public_repos, user.following, user.followers, user.public_gists].reduce((acc, cv) => acc + cv);
}

export default BattleField;