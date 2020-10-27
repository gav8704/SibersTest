import React, { 
  useEffect,
  useState
} from 'react'
import { useSelector } from 'react-redux'
import { 
  useParams, 
  Link 
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser, 
  faMapMarker,
  faCity,
  faGlobe,
  faEnvelope,
  faLink,
  faLongArrowAltLeft
} from '@fortawesome/free-solid-svg-icons'

import { getUserList } from '../redux/selectors'

const formItems = [
  'fullname',
  'address',
  'city',
  'state',
  'email',
  'website'
]

const UserInfo = () => {
  const { id: paramId } = useParams()
  const userList = useSelector(getUserList)
  const [user, setUser] = useState(null)
  const [isEdited, setIsEdited] = useState(false)
  const [form, setForm] = useState({
    fullname: '',
    address: '',
    city: '',
    state: '',
    email: '',
    website: ''
  })

  useEffect(() => {
    const id = transformIdToNumber(paramId)
    const user = getUserById(id)
    setUser(user)
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

  function getUserById(id) {
    return userList.find(user => user.id === id)
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

  return (
    <>
      <h1 className="main-caption">User's info</h1>

      {
        user && (
          <>
            <img 
              src={ user.avatar } 
              className="avatar circle"
              width="100"
              height="100"
              alt="avatar"
            />
            
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