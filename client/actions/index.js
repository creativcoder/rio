use { AUTH_REQUEST } from '../constants/action_type';

// Action emitted when user initiates oauth authentication with twitter
// This goes to modify the redux state with user credentials and a boolean value
// of `authenticated`.
export function authorize(oauth) {
	return {
		type: 'AUTH_REQUEST',
		payload: oauth
	}
}
