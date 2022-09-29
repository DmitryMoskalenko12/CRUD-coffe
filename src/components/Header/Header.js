import './header.scss';
import beans from '../../icons/beans.png';
import {Link, NavLink} from 'react-router-dom';
import {Helmet} from 'react-helmet';
function Header () {
  return(
    <section className="ourcoffe">
       <Helmet>
      <meta name="description" content="OurCoffe content"/>
   
      <title>Our coffe page</title>
      </Helmet>
      <div className="container">
        <nav className="ourcoffe__menu">
          <ul className="ourcoffe__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <Link end to={'/'}>Coffee house</Link></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? '#964b00' : 'White'})} end to={'/ourCoffe'}>Our coffee</NavLink></li>
            <li><Link end to= {'/pleasure'}>For your pleasure</Link></li>
          </ul>
        </nav>
        <div className="ourcoffe__text">Our Coffee</div>
      </div>
    </section>
  )
}
export default Header;