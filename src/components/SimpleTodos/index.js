import {Component} from 'react'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state: {searchInput: '', userTodoList: initialTodosList}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  onDeleteTodo = id => {
    const {userTodoList} = this.state
    const filteredTodoList = userTodoList.filter(each => each.id !== id)

    this.setState({userTodoList: filteredTodoList})
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="cont">
        <div className="inner-cont">
          <h1 className="heading">Simple Todos</h1>
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <ul>
            {searchResults.map(eachTodo => (
              <TodoItem
                onDelete={this.onDeleteTodo}
                todo={eachTodo}
                key={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
