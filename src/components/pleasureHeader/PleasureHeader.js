import './pleasureHeader.scss';
import beans from '../../icons/beans.png';
import {Link} from 'react-router-dom';
function PleasureHeader () {
  return(
    <section className="pleasure">
      <div className="container">
        <nav className="pleasure__menu">
          <ul className="pleasure__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <Link end to={'/'}>Coffee house</Link></li>
            <li><Link end to={'/ourCoffe'}>Our coffee</Link></li>
            <li><Link end to= {'/pleasure'}>For your pleasure</Link></li>
          </ul>
        </nav>
        <div className="pleasure__text">Our Coffee</div>
      </div>
    </section>
  )
}
export default PleasureHeader;