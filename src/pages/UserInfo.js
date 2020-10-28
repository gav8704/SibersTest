import React, { 
  useEffect,
  useState
} from 'react'
import { 
  useSelector,
  useDispatch
} from 'react-redux'
import { 
  useParams, 
  Link 
} from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser, 
  faMapMarker,
  faCity,
  faGlobe,
  faEnvelope,
  faLink,
  faLongArrowAltLeft,
  faUserEdit,
  faSave
} from '@fortawesome/free-solid-svg-icons'
import { useAlert } from 'react-alert'

import { getUserList } from '../redux/selectors'
import { updateUser } from '../redux/actions'

const formItems = [
  'fullname',
  'address',
  'city',
  'state',
  'email',
  'website'
]

const UserInfo = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const { id: paramId } = useParams()
  const userList = useSelector(getUserList)
  const [user, setUser] = useState(null)
  const [isEdited, setIsEdited] = useState(false)
  const [hasEmptyField, setHasEmptyField] = useState(false)
  const [form, setForm] = useState({
    fullname: '',
    address: '',
    city: '',
    state: '',
    email: '',
    website: ''
  })

  /**
   * If there are empty fields then disable edit button 
   */
  useEffect(() => {
    checkEmptyField()
  }, [form])

  /**
   * Searching user by param id
   */
  useEffect(() => {
    searchUserById()
  }, [paramId, userList])

  useEffect(() => {
    user && setForm({
      fullname: user.name,
      address: user.address.streetC,
      city: user.address.city,
      state: user.address.state,
      email: user.email,
      website: user.website
    })
  }, [user])

  function checkEmptyField() {
    let hasEmpty = false

    for(let fieldName in form) {
      if (form[fieldName] === '') {        
        hasEmpty = true
        break
      }
    }

    hasEmptyField !== hasEmpty && setHasEmptyField(hasEmpty)
  }

  function searchUserById() {
    const id = transformIdToNumber(paramId)
    const user = userList.find(user => user.id === id)

    user && setUser(user)
  }

  /**
   * @param {string} id - for example id12
   * @returns {number}
   */
  function transformIdToNumber(id) {
    return Number(id.slice(2))
  }

  function handleChange(e) {
    const {
      name,
      value
    } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  /**
   * Saves data's changes to the store and shows alert
   */
  function handleClick() {
    if (isEdited) {
      const updatedUser = { 
        ...user,
        name: form.fullname,
        email: form.email,
        website: form.website,
        address: {
          ...user.address,
          streetC: form.address,
          city: form.city,
          state: form.state
        }
      }

      dispatch(updateUser(updatedUser))

      alert.show('Data has been changed!', {
        type: 'success'
      })
    }

    setIsEdited(!isEdited)
  }

  return (
    <>
      <Helmet>
        <title>User's info</title>
      </Helmet>

      <h1 className="main-caption">
        { 
          user ? 
            `User's info` :
            `User not found`
        }
      </h1>

      {
        user && (
          <>
            <div className="flex-container">
              <img 
                src={ user.avatar } 
                className="avatar circle"
                width="100"
                height="100"
                alt="avatar"
              />
              <button
                onClick={ handleClick }
                disabled={ hasEmptyField }
                className={ `btn-edit ${ isEdited ? 'btn-edit--blue' : '' }` }
              >
                <FontAwesomeIcon icon={ isEdited ? faSave : faUserEdit } />
                { isEdited ? 'Save' : 'Edit' }
              </button>
            </div>

            <div className="user-form">
              {
                formItems.map((item, index) => {
                  let icon

                  switch (item) {
                    case 'fullname':
                      icon = faUser
                      break;
                    case 'address':
                      icon = faMapMarker;
                      break;
                    case 'city':
                      icon = faCity;
                      break;
                    case 'state':
                      icon = faGlobe;
                      break;
                    case 'email':
                      icon = faEnvelope;
                      break;
                    case 'website':
                      icon = faLink;
                      break;
                    default:
                      break;
                  }

                  return (
                    <div 
                      key={ index }
                      className="user-form__item"
                    >
                      <div>
                        <FontAwesomeIcon icon={ icon } />
                        <span className="user-form__title">{ item }</span>
                      </div>

                      <input
                        type="text"
                        name={ item }
                        value={ form[item] }
                        onChange={ handleChange }
                        disabled={ !isEdited }
                        className="user-form__input"
                      />
                    </div>
                  )
                })
              }
            </div>
          </>
        )
      }

      <Link 
        to="/"
        className="link-to-home"
      >
        <FontAwesomeIcon icon={ faLongArrowAltLeft } />
        Back to users
      </Link>
    </>
  )
}

export default UserInfo