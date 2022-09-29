import './header.scss';
import beans from '../../icons/beans.png';
import {Link, NavLink} from 'react-router-dom';
function Header () {
  return(
    <section className="ourCoffe">
      <div className="container">
        <nav className="ourCoffe__menu">
          <ul className="ourCoffe__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <Link end to={'/'}>Coffee house</Link></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? '#964b00' : 'White'})} end to={'/ourCoffe'}>Our coffee</NavLink></li>
            <li><Link end to= {'/pleasure'}>For your pleasure</Link></li>
          </ul>
        </nav>
        <div className="ourCoffe__text">Our Coffee</div>
      </div>
    </section>
  )
}
export default Header;