import './header.scss';
import beans from '../../icons/beans.png';
import {Link} from 'react-router-dom';
function Header () {
  return(
    <section className="ourCoffe">
      <div className="container">
        <nav className="ourCoffe__menu">
          <ul className="ourCoffe__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <Link end to={'/'}>Coffee house</Link></li>
            <li><Link end to={'/ourCoffe'}>Our coffee</Link></li>
            <li><a href="#">For your pleasure</a></li>
          </ul>
        </nav>
        <div className="ourCoffe__text">Our Coffee</div>
      </div>
    </section>
  )
}
export default Header;