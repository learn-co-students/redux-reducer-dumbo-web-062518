export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return { friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      const friends = state.friends.filter(friend => {
        return friend.id !== action.id
      })
      return { friends }
    default:
      return state
  }
}
