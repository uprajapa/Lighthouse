export const TodoItem = (props) => {
  console.log(props);
  return (
  <li>{props.task}<button name="delete" onClick={() => props.onDeleteItem(props.id)}>Delete</button></li>
  )
};