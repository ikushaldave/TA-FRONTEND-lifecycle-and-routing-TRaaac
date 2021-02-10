import React from "react";
import worldClockData from "../data/world-clock.json";
const { utcToZonedTime, format } = require("date-fns-tz");

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runningClocks: 3
    }
  }

  filterClock () {
    return worldClockData.filter((clock, index) => index < this.state.runningClocks)
  }

  addClock = () => {

    const {runningClocks} = this.state

    this.setState({
      runningClocks: (runningClocks <= worldClockData.length) ? runningClocks + 1 : runningClocks
    })
  }

  removeClock = () => {
    const { runningClocks } = this.state;

		this.setState({
			runningClocks: runningClocks > 3 ? runningClocks - 1 : runningClocks,
		});
  }

  render () {

    const clocks = this.filterClock();

    return (
		<div className="container mx-auto p-4">
			<h1 className="text-center text-2xl text-blue-400 font-bold">World Clock</h1>
			<div className="flex flex-wrap">
				{clocks.map((clock) => (
					<Clock clock={clock} key={clock.city} />
				))}
			</div>
			<div className="flex justify-center m-4">
				<button className="text-lg text-green-600 p-2 border rounded m-4" onClick={this.addClock}>
					<i className="fas fa-plus"></i>
				</button>
				<button className="text-lg text-red-600 p-2 border rounded m-4" onClick={this.removeClock}>
					<i className="fas fa-minus"></i>
				</button>
			</div>
		</div>
	);
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toISOString(),
    };
  }

  componentDidMount () {
    this.timeID = setInterval(() => {
      this.setState({
        currentTime: new Date().toISOString()
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timeID)
  }

  timeZone (tz) {
    const zonedDate = utcToZonedTime(this.state.currentTime, tz);
    const pattern = "d.M.yyyy HH:mm:ss.SSS 'GMT' XXX (z)";
    return format(zonedDate, pattern, { timeZone: tz });
  }

  render () {
    return (
      <div className="w-48 text-center shadow-lg p-4 bg-gray-50 m-4">
        <p className="text-gray-800 text-lg uppercase font-bold">{this.props.clock.city}</p>
        <p className="">{this.timeZone(this.props.clock.tz)}</p>
      </div>
    )
  }
}

export default WorldClock;

