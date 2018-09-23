export default function(state = [], action) {
	switch (action.type) {
		case 'initialise_grid':
			return action.payload;
		default:
			return state;
	}
}
