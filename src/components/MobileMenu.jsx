import {Link} from 'react-router-dom'
import { X } from 'react-bootstrap-icons'

const MobileMenu = ({closeMethod}) => {
  return (
    <>
      <button id='close-nav-menu' onClick={closeMethod}>
        <X />
      </button>
      <ul id='mobile-menu'>
        {/* Mobile Nav Links */}
        
        <li>
           <Link to="/about" onClick={closeMethod}>About</Link>
        </li>

        <li>
          <Link to='/' onClick={closeMethod}>Projects</Link>
        </li>

        <li>
            <Link to="/contact" onClick={closeMethod}>Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default MobileMenu

