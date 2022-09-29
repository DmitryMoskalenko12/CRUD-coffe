import PleasureHeader from "../components/pleasureHeader/PleasureHeader";
import PleasureAbout from "../components/pleasureAbout/PleasureAbout";
import Footer from "../components/Footer/Footer";
import { useHttpRequest } from "../hooks/http.hook";
import { useState, useEffect } from "react";
import CoffeList from "../components/coffeList/coffeList";
const PleasurePage = () =>{
  const [data, setData] = useState([]);

    const {request} = useHttpRequest();

    useEffect(() =>{
      request('http://localhost:3004/data')
      .then((res) => setData(res))
      //eslint-disable-next-line
    },[])
        
  return(
    <>
    <PleasureHeader/>
    <PleasureAbout/>
    <CoffeList data = {data}/>
    <Footer/>
    </>
  )
}
export default PleasurePage;