import './coffeListItem.scss';
import SortOfCoffe from '../../img/packCoffe.png';
import { Link } from 'react-router-dom';

function CoffeListItem(props) {
  const {title, price, name, coffeId} = props;


  return(

  <li className="coffe">
  <Link className='coffe__link' to={`/ourCoffe/${coffeId}`} >
  <div className="coffe__wrap">
    <img src={SortOfCoffe} alt="SortOfCoffe" />
  <div className="coffe__title"> {title}</div>
  <div className="coffe__name"> {name}</div>
  <div className="coffe__price">{price}</div>
  </div> 
  </Link>
 
 </li>
    
   
  )
}

export default CoffeListItem;