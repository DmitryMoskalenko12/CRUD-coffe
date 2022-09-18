import './header.scss';
import beans from '../../icons/beans.png'
function Header () {
  return(
    <section className="ourCoffe">
      <div className="container">
        <nav className="ourCoffe__menu">
          <ul className="ourCoffe__list">
            <li className="imgparent"><img src={beans} alt="beans" /> <a href="#">Coffee house</a></li>
            <li><a href="#">Our coffee</a></li>
            <li><a href="#">For your pleasure</a></li>
          </ul>
        </nav>
        <div className="ourCoffe__text">Our Coffee</div>
      </div>
    </section>
  )
}
export default Header;