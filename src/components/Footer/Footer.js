import './Footer.scss';
import beans from '../../icons/darkbeans.png';
import treeBeans from '../../icons/treeBeans.png';
import {Link, NavLink} from 'react-router-dom';

function Footer() {
  return(
    <section className="footer">
      <div className="container">
        <div className="footer__menu">
          <ul className="footer__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <Link end to={'/'}>Coffee house</Link></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? '#964b00' : 'inherit'})} end to={'/ourCoffe'}>Our coffee</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? '#964b00' : 'inherit'})} end to= {'/pleasure'}>For your pleasure</NavLink></li>
          </ul>
        </div>
        <div className="footer__divider">
          <hr className="footer__left"/>
          <img src={treeBeans} alt="treeBeans" />
          <hr className="footer__right"/>
       </div>
      </div>
    </section>
  )
}
export default Footer;