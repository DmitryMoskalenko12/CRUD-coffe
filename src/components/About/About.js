import './About.scss'
import coupleCoffe from '../../img/coupleCoffe.png';
import treeBeans from '../../icons/treeBeans.png';
function About () {
  return(
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__imgwrapper">
            <img src={coupleCoffe} alt="coupleCoffe" />
          </div>

          <div className="about__descr">
            <div className="about__title">About our beans</div>
            <div className="about__divider">
              <hr className="about__left"/>
              <img src={treeBeans} alt="treeBeans" />
              <hr className="about__right"/>
            </div>

            <div className="about__text">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /><br />

            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. <br />
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
            </div>
          </div>
        </div>
        <div className="about__line"></div>
      </div>
    </section>
  )
}
export default About;