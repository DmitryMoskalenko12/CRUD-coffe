import './coffeListItem.scss';
import SortOfCoffe from '../../img/packCoffe.png'
function CoffeListItem(props) {
  const {title, price, name} = props;
  return(
    <li className="coffe">
      <div className="coffe__wrap">
        <img src={SortOfCoffe} alt="SortOfCoffe" />
      <div className="coffe__title"> {title}</div>
      <div className="coffe__name"> {name}</div>
      <div className="coffe__price">{price}</div>
      </div>
      
    </li>
  )
}

export default CoffeListItem;