import {TiPencil} from 'react-icons/ti'
import './index.css'

const ContactItem = props => {
  const {contactDetails} = props
  const {name} = contactDetails

  return (
    <li className="table-row">
      <div>
        <p>{name}</p>
      </div>
      <div>
        <TiPencil className="icons" />
        <button type="button">Delete</button>
      </div>
    </li>
  )
}

export default ContactItem
