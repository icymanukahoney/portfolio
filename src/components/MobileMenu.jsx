//import {Link} from 'react-router-dom'
import { X } from 'react-bootstrap-icons'

const MobileMenu = ({closeMethod}) => {
  return (
    <>
      <button id='close-nav-menu' onClick={closeMethod}>
        <X />
      </button>
      <ul id='mobile-menu'>
        <li>
          <a href='#about' onClick={closeMethod}>
            About
          </a>
        </li>

        <li>
          <a href='#ux' onClick={closeMethod}>
            UX
          </a>
        </li>
        
        <li>
          <a href='#projects' onClick={closeMethod}>
            Projects
          </a>
        </li>

        <li>
          <a href='#reels' onClick={closeMethod}>
            Reels
          </a>
        </li>

        <li>
          <a href='#contact' onClick={closeMethod}>
            Contact
          </a>
        </li>
      </ul>
    </>
  )
}

export default MobileMenu

