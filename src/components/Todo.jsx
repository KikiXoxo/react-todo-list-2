import { useState, useRef } from 'react';
import './css/Todo.css';
import { useEffect } from 'react';
import TodoItems from './TodoItems';

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }); // Set initial value of todos to data gotten from local storage. If not available, set to empty array

  const inputRef = useRef(null);

  const add = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: '' },
      // Note that 'count++' mutates count itself. Also, it is post-incremental. Meaning the current value of count is assigned to 'no', then count is mutated after. This means the first time add runs, for the new object being added, no = 0, then count becomes 1. For the second time add runs, no = 1, then count becomes 2. If you want the new count value to be what gets assigned to no, then you will do ++count instead (pre-incremental). REMEMBER both of these mutate count, even though we didn't explicitly state it
      // If we did (count + 1) instead, the result would be different. This does not mutate count, which means the value of count will always remain 0 no matter how many times add is run. And 'no' will always be 1 because 0 + 1 is what will be executed every time
    ]);
    inputRef.current.value = '';

    localStorage.setItem('todos_count', count);
  };

  // Retrieve initial data from local storage
  // useEffect(() => {
  //   setTodos(JSON.parse(localStorage.getItem('todos')));
  // }, []); // When the second argument is an empty array, useEffect runs only once after the initial render. It works the same as onMounted in vue

  // Store data to local storage, set delay so as not to interfere with first useEffect hook
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(todos);
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }, 100);
  // }, [todos]);
  // This method of using two useEffect hooks is not ideal though, so I will comment it out. Instead, I will retrieve the data within the useState hook, and I will have only one useEffect hook to store the data as below

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    count = localStorage.getItem('todos_count');
  }, [todos]);

  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
        <input
          ref={inputRef}
          type='text'
          placeholder='Add Your Task'
          className='todo-input'
        />
        <div
          onClick={() => {
            add();
          }}
          className='todo-add-btn'
        >
          ADD
        </div>
      </div>
      <div className='todo-list'>
        {todos.map((item, index) => {
          return (
            <TodoItems
              key={index}
              no={item.no}
              display={item.display}
              text={item.text}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
