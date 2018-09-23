import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';
import { initialiseGrid } from '../actions/gridActions';
import { checkWin } from '../actions/flagActions';

class Grid extends Component {
	componentWillMount() {
		this.props.initialiseGrid(this.props.nCols, this.props.nRows);
	}

	renderGrid() {
		let { grid } = this.props;
		if (grid.length) {
			// Show only if grid has been initialised

			// Iterate through array and print cells
			return grid.map((row, index) => {
				return (
					<div
						key={index}
						style={{
							flexDirection: 'row',
							display: 'flex',
							justifyContent: 'space-between',
							paddingTop: 10
						}}
					>
						{row.map((cell, index) => {
							return (
								<Cell
									key={index}
									bomb={cell.bomb}
									surroundings={cell.surroundings}
								/>
							);
						})}
					</div>
				);
			});
		}
	}

	render() {
		let { flagsPlaced, correctFlags } = this.props.flagInfo;

		// Conditions for winning
		if (
			flagsPlaced === correctFlags &&
			flagsPlaced === this.props.grid.length &&
			flagsPlaced !== 0
		) {
			console.log('Win game');
		}
		// this.props.checkWin(flagsPlaced, correctFlags, this.props.grid.length);
		return <div>{this.renderGrid()}</div>;
	}
}

const mapStateToProps = state => {
	return { grid: state.grid, flagInfo: state.flagInfo };
};

export default connect(
	mapStateToProps,
	{
		initialiseGrid,
		checkWin
	}
)(Grid);
