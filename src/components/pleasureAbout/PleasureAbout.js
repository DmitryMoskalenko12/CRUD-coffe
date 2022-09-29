import './pleasureAbout.scss'
import coffe from '../../img/coffe.png';
import treeBeans from '../../icons/treeBeans.png';
function PleasureAbout () {
  return(
    <section className="pleasureabout">
      <div className="container">
        <div className="pleasureabout__wrapper">
          <div className="pleasureabout__imgwrapper">
            <img src={coffe} alt="coffe" />
          </div>

          <div className="pleasureabout__descr">
            <div className="pleasureabout__title">About our goods</div>
            <div className="pleasureabout__divider">
              <hr className="pleasureabout__left"/>
              <img src={treeBeans} alt="treeBeans" />
              <hr className="pleasureabout__right"/>
            </div>

            <div className="pleasureabout__text">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
            </div>
          </div>
        </div>
        <div className="pleasureabout__line"></div>
      </div>
    </section>
  )
}
export default PleasureAbout;