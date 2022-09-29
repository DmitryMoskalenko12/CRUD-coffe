import beans from '../../icons/beans.png';
import './mainPageHeader.scss';
import headerbeans from '../../icons/whitebeans.png';
import { Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const MainPageHeader = () =>{
return(
  <section className="header">
     <Helmet>
      <meta name="description" content="Coffe house content"/>
   
      <title>Coffe house page</title>
      </Helmet>
    <div className="container">
        <nav className="header__menu">
          <ul className="header__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <NavLink style={({isActive}) => ({color: isActive ? '#964b00' : 'inherit'})} end to={'/'} >Coffee house</NavLink></li>
            <li><Link end to={'/ourCoffe'}>Our coffee</Link></li>
            <li><Link end to= {'/pleasure'}>For your pleasure</Link></li>
          </ul>
        </nav>

        <div className="header__text">
          Everything You Love About Coffee
        </div>

        <div className="header__divider">
          <hr className="header__left"/>
          <img src={headerbeans} alt="headerbeans" />
          <hr className="header__right"/>
       </div>

       <div className="header__descr">
       We makes every day full of energy and taste 
          <div>Want to try our beans?</div> 
       </div>

       <button className='header__button'>More</button>
    </div>
  </section>
)
}
export default MainPageHeader;