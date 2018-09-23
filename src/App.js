import React, { Component } from 'react';
import Grid from './components/Grid';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">Minesweeper</h1>
						<p>Joel Saleem</p>
						<p>
							Locate <b>5</b> Mines hidden in the table
						</p>
					</header>
					<p className="App-intro">
						Please find notes to this version at the bottom
					</p>
					<Grid nCols={5} nRows={5} />
				</div>

				<div style={{ paddingLeft: 6, paddingRight: 6 }}>
					<h1>In progress:</h1>
					<p>What I would have done if I had more than two hours</p>
					<ul>
						<li>
							At the moment, if the user wins or loses, it is just console
							logged. Given more time, the user should be notified of the result
							and given the option of starting a new game
						</li>

						<li>
							Have a game state in redux — in progress, win, lost and reset
							appropriately / prompt user action. Check win after every user
							action, as described above. Create a redux action creator to call
							game lost and offer to reset game. In progress initialised to be
							true at the start and false after every win / loss. The user will
							be able to re-initialise the grid, and reset the game. The
							inProgress flag will again be set to true.
						</li>

						<li>
							User will not be allowed to take any actions after the game is
							lost. Could be done on Cell.js checking gameInProgress state
							before reveal/flag
						</li>

						<li>
							gameLost action creator should also reveal the location of all
							bombs. To be completely honest, I have not yet thought of the
							neatest way to do this. But one way to do it would to be to
							completely re-render the grid without changing the state of grid
						</li>

						<li>
							The game should be state persistent. This could be done by storing
							information in local storage or in a database and fetching upon
							initialise. I would favour the local storage method to allow
							offline play. I believe local-storage is built into
							create-react-app, which is what I have used here. However, I have
							never really looked into it. The information that would need to be
							stored would be the current grid, and there would need to be a way
							of keeping track of the flags placed and cells clicked on. This is
							not currently available in this version, but the grid piece of
							state could be extended to include this information in the object.
							Instead of then executing the flagged and clicked state at the
							component level, redux action creators should be executed in
							Cell.js to update the state at the redux store level.
						</li>

						<li>
							This game has been created to allow for variable difficulties
							(variable grid size), but I have not yet created a user prompt. It
							is extremely easy to do, but low down on the priority list.
						</li>

						<li>
							Styling! Include icons for flags and perhaps different colours for
							different numbers of bombs in surrounding cells to indicate
							severity. Find a better way to reveal or flag cells — perhaps
							right-click to set the flag and left to reveal. I have not used
							right clicks with react, and given the time, settled for the
							solution above. Note that using icons instead of words will allow
							for much harder games.
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
