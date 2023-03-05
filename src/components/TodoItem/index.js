// Write your code here
const TodoItem = props => {
  const {eachTodo, onDeleteTodo} = props
  const {title, id} = eachTodo

  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li>
      <p className="heading">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
