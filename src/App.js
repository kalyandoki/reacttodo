import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Write code(Updated 0 time)',
  },
  {
    id: uuidv4(),
    name: 'Write code(Updated 0 time)',
  },
  {
    id: uuidv4(),
    name: 'Write code(Updated 0 time)',
  },
]

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
  }

  onAddContact = event => {
    event.preventDefault()
    const {name} = this.state
    const newContact = {
      id: uuidv4(),
      name,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      name: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, contactsList} = this.state
    return (
      <div>
        <div>
          <div className="form">
            <h1>Day Goals!</h1>
            <form onSubmit={this.onAddContact}>
              <input
                value={name}
                onChange={this.onChangeName}
                className="input"
                placeholder="Write Code 3"
              />
              <button type="submit" className="button">
                Add Todo
              </button>
            </form>
          </div>
          <ul className="ul-list">
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
