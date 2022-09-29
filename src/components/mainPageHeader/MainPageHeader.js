import beans from '../../icons/beans.png';
import './mainPageHeader.scss';
import headerbeans from '../../icons/whitebeans.png';
import { Link } from 'react-router-dom';
const MainPageHeader = () =>{
return(
  <section className="header">
    <div className="container">
        <nav className="header__menu">
          <ul className="header__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <Link end to={'/'} >Coffee house</Link></li>
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