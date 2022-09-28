import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import aromistiko from '../../img/aromistiko.jpg';
import treeBeans from '../../icons/treeBeans.png';
import { useHttpRequest } from "../../hooks/http.hook";
import './coffeCard.scss';

const CoffeCard = () =>{
const [idCard, setId] = useState({});

const {id} = useParams();

const {request} = useHttpRequest();

useEffect(()=>{
request(`http://localhost:3004/data/${id}`)
    .then((res) => setId(res))
    //eslint-disable-next-line
},[id])


const {name, price, description} = idCard;

  return(
    <section className="aboutcoffe">
      <div className="container">
        <div className="aboutcoffe__wrapper">
          <div className="aboutcoffe__imgwrapper">
            <img src={aromistiko} alt={name} />
          </div>

          <div className="aboutcoffe__descr">
            <div className="aboutcoffe__title">About it</div>
            <div className="aboutcoffe__divider">
              <hr className="aboutcoffe__left"/>
              <img src={treeBeans} alt="treeBeans" />
              <hr className="aboutcoffe__right"/>
            </div>

            <div className="aboutcoffe__country">Country: <span>{name}</span> </div>
            <div className="aboutcoffe__description">Description: <span>{description}</span> </div>
            <div className="aboutcoffe__price">Price: <span>{price}</span> </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
export default CoffeCard;