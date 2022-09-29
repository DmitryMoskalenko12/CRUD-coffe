import './pleasureHeader.scss';
import beans from '../../icons/beans.png';
import {Link, NavLink} from 'react-router-dom';
import {Helmet} from 'react-helmet'
function PleasureHeader () {
  return(
    <section className="pleasure">
      <Helmet>
      <meta name="description" content="Pleasure content"/>
   
      <title>Four your pleasure page</title>
      </Helmet>
      <div className="container">
        <nav className="pleasure__menu">
          <ul className="pleasure__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <Link end to={'/'}>Coffee house</Link></li>
            <li><Link end to={'/ourCoffe'}>Our coffee</Link></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? '#964b00' : 'inherit'})} end to= {'/pleasure'}>For your pleasure</NavLink></li>
          </ul>
        </nav>
        <div className="pleasure__text">For your pleasure</div>
      </div>
    </section>
  )
}
export default PleasureHeader;