import Header from "../components/Header/Header";
import About from "../components/About/About";
import CoffeList from "../components/coffeList/coffeList";
import Footer from "../components/Footer/Footer";
import SearchFilter from "../components/searchFilter/searchFilter";
import { useState, useEffect } from "react";
import { useHttpRequest } from "../hooks/http.hook";

const OurCoffe = () =>{

  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('');

    const {request} = useHttpRequest();

    useEffect(() =>{
      request('http://localhost:3004/data')
      .then((res) => setData(res))
      //eslint-disable-next-line
    },[])
        
    const onSetTerm = (term) =>{
    setTerm(term)
    }
  
    const onSetFilter = (filter) =>{
      setFilter(filter)
      }
  
    const setTermChange = (items, term) =>{
      if (term.length === 0) {
        return items
      }
      return items.filter(elem =>{
        return elem.name.indexOf(term) > -1
      })
    }
    const setFilterChange = (items, filter) =>{
    switch (filter) {
      case 'Brazil':
        return items.filter(elem => elem.name === 'Brazil')
      case 'Kenya':
        return items.filter(elem => elem.name === 'Kenya')  
      case 'Columbia':
        return items.filter(elem => elem.name === 'Columbia')
        case 'All':
          return items.filter(elem => elem.name)  
      default:
        return items
    }
    }
   
      const final = setFilterChange(setTermChange(data, term), filter);

  return(
     <div className="wrapper">
        <Header/>
        <About/>
        <SearchFilter findFilter = {onSetFilter} findTerm = {onSetTerm}/>
        <CoffeList data = {final}/>
        <Footer/>
      </div>
    
  )
}
export default OurCoffe;