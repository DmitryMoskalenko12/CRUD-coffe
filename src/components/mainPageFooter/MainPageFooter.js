import './mainPageFooter.scss';
import mainbeans from '../../icons/treeBeans.png';
import maindarkbeans from '../../icons/darkbeans.png';
import { Link } from 'react-router-dom';

const MainPageFooter = () =>{
  return(
    <section className="footermain">
      <div className="container">
        <div className="footermain__menu">
          <ul className="footermain__list">
            <li className="imgparent"><img src={maindarkbeans} alt="beans" /> <Link end to={'/'}>Coffee house</Link></li>
            <li><Link end to={'/ourCoffe'} href="#">Our coffee</Link></li>
            <li><a href="#">For your pleasure</a></li>
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