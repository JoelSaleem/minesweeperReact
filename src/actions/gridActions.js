export const initialiseGrid = (nCols, nRows) => {
	// Create grid
	let grid = [];
	for (let i = 0; i < nCols; i++) {
		let row = [];
		for (let j = 0; j < nRows; j++) {
			row.push({ bomb: false, clicked: false, surroundings: 0 });
		}
		grid.push(row);
	}

	// Set random bombs
	let area = nCols * nRows;
	let nBombs = Math.floor(Math.sqrt(area));
	let nBombsPlaced = 0;

	while (nBombsPlaced < nBombs) {
		let randomX = Math.floor(Math.random() * nRows);
		let randomY = Math.floor(Math.random() * nCols);

		if (!grid[randomY][randomX]['bomb']) {
			grid[randomY][randomX]['bomb'] = true;
			nBombsPlaced++;
		}
	}

	// populate surroundings numbers
	for (let i = 0; i < nCols; i++) {
		for (let j = 0; j < nRows; j++) {
			let nSurrounding = 0;
			// top left
			if (i - 1 >= 0 && j - 1 >= 0 && grid.length) {
				if (grid[j - 1][i - 1]['bomb']) {
					nSurrounding++;
				}
			}

			// top
			if (i - 1 >= 0 && grid.length) {
				if (grid[j][i - 1]['bomb']) {
					nSurrounding++;
				}
			}

			// top right
			if (i - 1 >= 0 && j + 1 < nRows && grid.length) {
				if (grid[j + 1][i - 1]['bomb']) {
					nSurrounding++;
				}
			}

			// left
			if (j - 1 >= 0 && grid.length) {
				if (grid[j - 1][i]['bomb']) {
					nSurrounding++;
				}
			}

			// right
			if (j + 1 < nRows && grid.length) {
				if (grid[j + 1][i]['bomb']) {
					nSurrounding++;
				}
			}

			// bottom left
			if (i + 1 < nCols && j - 1 >= 0 && grid.length) {
				if (grid[j - 1][i + 1]['bomb']) {
					nSurrounding++;
				}
			}

			// bottom
			if (i + 1 < nCols && grid.length) {
				if (grid[j][i + 1]['bomb']) {
					nSurrounding++;
				}
			}

			// bottom right
			if (i + 1 < nCols && j + 1 < nRows && grid.length) {
				if (grid[j + 1][i + 1]['bomb']) {
					nSurrounding++;
				}
			}

			grid[j][i]['surroundings'] = nSurrounding;
		}
	}

	return {
		type: 'initialise_grid',
		payload: grid
	};
};
