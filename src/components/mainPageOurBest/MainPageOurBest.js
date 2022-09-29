import twopack from '../../img/twopack.png';
import presto from '../../img/presto.png';
import pack from '../../img/packCoffe.png';

import './mainPageOurBest.scss';
const MainPageOurBest = () =>{
return(
  <>
  <section className="ourbest">
    <div className="container">
    <div className="ourbest__title">Our best</div>

    <div className="ourbest__wrap">

    <div className="ourbest__card">
    <div className="ourbest__imgwrap">
      <img src={twopack} alt="twopack" />
    </div>
    <div className="ourbest__cardtitle">Solimo Coffee Beans 2 kg</div>
    <div className="ourbest__cardprice">10.73$</div>
    </div>

    <div className="ourbest__card">
    <div className="ourbest__imgwrap">
      <img src={presto} alt="presto" />
    </div>
    <div className="ourbest__cardtitle">Presto Coffee Beans 1 kg</div>
    <div className="ourbest__cardprice">15.99$</div>
    </div>

    <div className="ourbest__card">
    <div className="ourbest__imgwrap">
      <img src={pack} alt="pack" />
    </div>
    <div className="ourbest__cardtitle">AROMISTICO Coffee 1 kg</div>
    <div className="ourbest__cardprice">6.99$</div>
    </div>

    </div>
    </div>
  </section>
  </>
)
}
export default MainPageOurBest;