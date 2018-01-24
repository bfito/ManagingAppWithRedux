// State argmetn is not appliaction state, only the
// state = null Defines the state to null if state is undefined
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
