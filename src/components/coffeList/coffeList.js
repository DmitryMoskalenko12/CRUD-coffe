import './coffeList.scss';
import CoffeListItem from '../coffeListItem/coffeListItem';
function CoffeList(props) {
  const {data} = props;
  const card = data.map(({title, name, price, id})=>{
    return <CoffeListItem key = {id} title={title} name = {name} price = {price}/>
  })
  return(
    <section className="coffeCard">
    <div className="container">
      <ul className="coffeCard__wrapper">
        {card}
      </ul>
    </div>
  </section>
  )
}

export default CoffeList;