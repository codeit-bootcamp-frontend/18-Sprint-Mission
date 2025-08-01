import { NavLink } from 'react-router-dom';
import './Nav.css';

function getLinkStyle ({isActive}) { 
  return {
    color: isActive ? '#3692FF' : '#485563',
  }
}

export default function Nav() {
  return (
    <ul className='panda-nav'>
      <li className='panda-li'>
        <NavLink >자유게시판</NavLink>
      </li>
      <li className='panda-li'>
        <NavLink to="/items" style={getLinkStyle}>중고마켓</NavLink>
      </li>
    </ul>
  );
}
