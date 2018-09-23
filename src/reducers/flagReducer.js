export default function(
	state = {
		flagsPlaced: 0,
		correctFlags: 0,
		win: false
	},
	action
) {
	switch (action.type) {
		case 'incorrect_flag_added':
			return { ...state, flagsPlaced: action.payload };
		case 'incorrect_flag_removed':
			return { ...state, flagsPlaced: action.payload };
		case 'correct_flag_added':
			return {
				flagsPlaced: action.payload.flagsPlaced,
				correctFlags: action.payload.correctFlags
			};
		case 'correct_flag_removed':
			return {
				flagsPlaced: action.payload.flagsPlaced,
				correctFlags: action.payload.correctFlags
			};
		case 'check_win':
			return {
				win: true
			};
		default:
			return state;
	}
}
