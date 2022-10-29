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
                  {todo.text}
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