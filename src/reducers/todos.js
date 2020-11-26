export const todos = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: Date.now(), todo: action.todo, completed: false }];
    case 'UPDATE_TODO':
      const stateCopy = [...state]
      const updatedTodoIndex = stateCopy.findIndex(todo => {
        return todo.id === action.todo.id
      })

      let fixed = stateCopy.map((item, index) => {
        if (index !== updatedTodoIndex) {
          return item
        }
      let newObj = {...item}
      newObj.completed = ! newObj.completed
      return newObj
  })
return fixed
    default:
      return state;
  }
}
