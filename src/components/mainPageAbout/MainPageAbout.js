import darkbeans from '../../icons/darkbeans.png';
import './mainPageAbout.scss';
const MainPageAbout = () =>{
  return(
   <>
   <section className="aboutus">
    <div className="container">
      <div className="aboutus__aboutus">About Us</div>

       <div className="aboutus__divider">
          <hr className="aboutus__left"/>
          <img src={darkbeans} alt="headerbeans" />
          <hr className="aboutus__right"/>
       </div>

       <div className="aboutus__text">
        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face. <br />

        Now residence dashwoods she excellent you. Shade being under his bed her, Much
        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
        horrible but confined day end marriage. Eagerness furniture set preserved far
        recommend. Did even but nor are most gave hope. Secure active living depend son
        repair day ladies now.
       </div>
    </div>
   </section>
   </>
  )
}
export default MainPageAbout;