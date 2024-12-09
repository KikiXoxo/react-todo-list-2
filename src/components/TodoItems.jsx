import './css/TodoItems.css';
import tick from './assets/tick.png';
import not_tick from './assets/not_tick.png';
import cross from './assets/cross.png';

const TodoItems = ({ no, display, text, setTodos }) => {
  const toggle = () => {
    let data = JSON.parse(localStorage.getItem('todos'));

    const todo = data.find(todo => todo.no === no);
    if (todo) todo.display = todo.display === '' ? 'line-through' : '';

    setTodos(data); // Modify todos to the value of data
  };

  const deleteTodo = () => {
    let data = JSON.parse(localStorage.getItem('todos'));
    data = data.filter(todo => todo.no !== no);

    setTodos(data);
  };

  return (
    <div className='todoitems'>
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle();
        }}
      >
        {display === '' ? (
          <img src={not_tick} alt='' />
        ) : (
          <img src={tick} alt='' />
        )}

        <div className='todoitems-text'>{text}</div>
      </div>

      <img
        className='todoitems-cross-icon'
        onClick={() => {
          deleteTodo();
        }}
        src={cross}
        alt=''
      />
    </div>
  );
};

export default TodoItems;
