import './Footer.scss';
import beans from '../../icons/darkbeans.png';
import treeBeans from '../../icons/treeBeans.png';
function Footer() {
  return(
    <section className="footer">
      <div className="container">
        <div className="footer__menu">
          <ul className="footer__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <a href="#">Coffee house</a></li>
            <li><a href="#">Our coffee</a></li>
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