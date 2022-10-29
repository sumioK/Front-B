import { useState } from 'react';
import stylesheets from './TodoForm.css'

const TodoForm = ({add}) => {
  const [ newTodo, setNewTodo ] = useState('');

  const handleChange = event => {
    setNewTodo(event.target.value);
  }

  const addTodo = () => {
    if (newTodo === '') return;
    add(newTodo);
    setNewTodo('');
  }

  return (
    <>
      <div class="form-container">
        <input class="input_area"value={newTodo} onChange={handleChange}/>
        <button class="input_button" onClick={addTodo}>追加</button>
      </div>
    </>
  );
}

export default TodoForm;