import { useState, useEffect } from 'react';
import './App.css';
import { TodoItem } from './components/ToDoItem';


function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/todos')
      .then(res => res.json())
      .then(data => {
        setItems([...data])
      })
  }, [])

  const onDeleteItem = (id) => {
    fetch(`/todos/${id}/delete`, {
      method: 'POST'
    })
      .then((response) => {
        if (response.ok) {
          setItems(items.filter(item => item.id !== id));
        } else {
          throw new Error('Error deleting item');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  const toDoItemComponentsArr = items.map((item) => {
    return (
      <TodoItem key={item.id} id={item.id} task={item.task} onDeleteItem={onDeleteItem} />
    )
  })


  return (
    <div className="App">
      <ul>
        {toDoItemComponentsArr}
      </ul>
    </div>
  );
}

export default App;
