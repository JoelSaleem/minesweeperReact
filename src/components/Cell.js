import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	incorrectFlagAdded,
	incorrectFlagRemoved,
	correctFlagAdded,
	correctFlagRemoved,
	checkWin
} from '../actions/flagActions';

class Cell extends Component {
	// Cell object
	constructor() {
		super();
		//track whether the user has clicked to reveal cell or set a flag
		this.state = { clicked: false, flagged: false };
	}

	flagCB() {
		// Update flag count
		let { flagged } = this.state;
		let { bomb, flagsPlaced, correctFlags } = this.props;

		// If flag about to be set - i.e. no flag present and there is a bomb
		if (!flagged && bomb) {
			this.props.correctFlagAdded(flagsPlaced, correctFlags);
		}

		// If flag about to be set and no bomb
		if (!flagged && !bomb) {
			this.props.incorrectFlagAdded(flagsPlaced);
		}

		// If flag about to be removed and bomb
		if (flagged && bomb) {
			this.props.correctFlagRemoved(flagsPlaced, correctFlags);
		}

		// If flag aobut to be removed and no bomb
		if (flagged && !bomb) {
			this.props.incorrectFlagRemoved(flagsPlaced, correctFlags);
		}

		// Toggle the flag
		this.setState({ flagged: !this.state.flagged });
	}

	renderInfo() {
		// Render the flag, bomb or number of surrounding bombs in that priority
		let { clicked, flagged } = this.state;
		if (flagged && !clicked) {
			return this.renderFlag();
		} else if (clicked) {
			return this.renderAction();
		}
	}

	renderFlag() {
		return 'FLAGGED!';
	}

	renderAction() {
		// render bomb if there is one, else number of surrounding bombs
		let { bomb, surroundings } = this.props;

		if (bomb) {
			console.log('GAME LOST');
			return <p style={{ color: 'red' }}>You lose</p>;
		}
		return <p>{surroundings}</p>;
	}

	render() {
		return (
			<div style={{ backgroundColor: 'grey', width: 150, height: 150 }}>
				<div
					onClick={() => {
						if (!this.state.flagged) {
							this.setState({ clicked: true });
						}
					}}
				>
					<p>Reveal</p>
				</div>
				<div
					onClick={() => {
						this.flagCB();
					}}
				>
					<p>Flag</p>
				</div>
				{this.renderInfo()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		flagsPlaced: state.flagInfo.flagsPlaced,
		correctFlags: state.flagInfo.correctFlags
	};
};

export default connect(
	mapStateToProps,
	{
		incorrectFlagAdded,
		incorrectFlagRemoved,
		correctFlagAdded,
		correctFlagRemoved,
		checkWin
	}
)(Cell);
