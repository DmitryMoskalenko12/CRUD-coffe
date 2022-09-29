import './mainPageFooter.scss';
import mainbeans from '../../icons/treeBeans.png';
import maindarkbeans from '../../icons/darkbeans.png';
import { Link , NavLink} from 'react-router-dom';

const MainPageFooter = () =>{
  return(
    <section className="footermain">
      <div className="container">
        <div className="footermain__menu">
          <ul className="footermain__list">
            <li className="imgparent"><img src={maindarkbeans} alt="beans" /> <NavLink style={({isActive}) => ({color: isActive ? '#964b00' : 'inherit'})} end to={'/'}>Coffee house</NavLink></li>
            <li><Link end to={'/ourCoffe'} href="#">Our coffee</Link></li>
            <li><Link end to= {'/pleasure'}>For your pleasure</Link></li>
          </ul>
        </div>
        <div className="footermain__divider">
          <hr className="footermain__left"/>
          <img src={mainbeans} alt="treeBeans" />
          <hr className="footermain__right"/>
       </div>
      </div>
    </section>
  )
}

export default MainPageFooter;