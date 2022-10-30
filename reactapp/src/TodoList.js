import stylesheets from './TodoList.css'
const TodoList = ({todos, del}) => {
  return (
    <>
      <ul>
        {
          todos.map(todo => {
            return (
              <div class="todo-container">
                <li key={todo.id}>
                  <button class="delete-button" onClick={() => del(todo.id)}>X</button>
                  <div class="list-container">
                  <p>{todo.text}</p>
                  </div>
                </li>
              </div>
            )
          })
        }
      </ul>
    </>
  );
  }

export default TodoList;