export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const deleteThisIndex = state.friends.findIndex(friend => friend.id === action.id)
      const copyOfArray = state.friends.slice();
      copyOfArray.splice(deleteThisIndex, 1)
      return {friends: copyOfArray} 
    default:
      return state
  }
}
