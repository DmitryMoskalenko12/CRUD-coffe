import Header from "../components/Header/Header";
import About from "../components/About/About";
import CoffeList from "../components/coffeList/coffeList";
import Footer from "../components/Footer/Footer";
import SearchFilter from "../components/searchFilter/searchFilter";
import { useState } from "react";
const OurCoffe = () =>{

  const [data, setData] = useState([ 
    {name: 'Brazil', title:'AROMISTICO Coffee 1 kg', price: '5.99$', id: 1},
    {name: 'Kenya', title:'AROMISTICO Coffee 1 kg', price: '4.99$', id: 2},
    {name: 'Columbia', title:'AROMISTICO Coffee 1 kg', price: '7.99$', id: 3},
    {name: 'Brazil', title:'AROMISTICO Coffee 1 kg', price: '6.99$', id: 4},
    {name: 'Columbia', title:'AROMISTICO Coffee 1 kg', price: '9.99$', id: 5},
    {name: 'Columbia', title:'AROMISTICO Coffee 1 kg', price: '6.99$', id: 6}])
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('')
        
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