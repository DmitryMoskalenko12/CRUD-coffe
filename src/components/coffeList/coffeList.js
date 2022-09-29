import './coffeList.scss';
import CoffeListItem from '../coffeListItem/coffeListItem';
function CoffeList(props) {
  const {data} = props;
  const card = data.map(({title, name, price, id})=>{
    return <CoffeListItem key = {id} coffeId = {id} title={title} name = {name} price = {price}/>
  })
  return(
    <section className="coffecard">
    <div className="container">
      <ul className="coffecard__wrapper">
        {card}
      </ul>
    </div>
  </section>
  )
}

export default CoffeList;