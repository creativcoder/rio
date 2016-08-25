import Immutable from 'immutable';

export default function(state=Immutable.Map({}), action) {
	switch(action.type) {
		default: return state;	
	}
}
