export const incorrectFlagAdded = flagsPlaced => {
	return { type: 'incorrect_flag_added', payload: ++flagsPlaced };
};

export const incorrectFlagRemoved = flagsPlaced => {
	return { type: 'incorrect_flag_removed', payload: --flagsPlaced };
};

export const correctFlagAdded = (flagsPlaced, correctFlags) => {
	correctFlags++;
	flagsPlaced++;
	return { type: 'correct_flag_added', payload: { correctFlags, flagsPlaced } };
};

export const correctFlagRemoved = (flagsPlaced, correctFlags) => {
	correctFlags--;
	flagsPlaced--;
	return {
		type: 'correct_flag_removed',
		payload: { correctFlags, flagsPlaced }
	};
};

export const checkWin = (flagsPlaced, correctFlags, bombsPlaced) => {
	if ((flagsPlaced === correctFlags) === bombsPlaced) {
		return { type: 'check_win', payload: true };
	}
};
