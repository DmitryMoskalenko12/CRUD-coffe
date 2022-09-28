import './Footer.scss';
import beans from '../../icons/darkbeans.png';
import treeBeans from '../../icons/treeBeans.png';
import {Link} from 'react-router-dom';

function Footer() {
  return(
    <section className="footer">
      <div className="container">
        <div className="footer__menu">
          <ul className="footer__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <Link end to={'/'}>Coffee house</Link></li>
            <li><Link end to={'/ourCoffe'}>Our coffee</Link></li>
            <li><a href="#">For your pleasure</a></li>
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