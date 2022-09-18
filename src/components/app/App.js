import './app.scss';
import Header from '../Header/Header';
import About from '../About/About';
import SearchFilter from '../searchFilter/searchFilter';
import CoffeList from '../coffeList/coffeList';
import {Component} from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
        {name: 'Brazil', title:'AROMISTICO Coffee 1 kg', price: '6.99$', id: 1},
        {name: 'Kenya', title:'AROMISTICO Coffee 1 kg', price: '6.99$', id: 2},
        {name: 'Columbia', title:'AROMISTICO Coffee 1 kg', price: '6.99$', id: 3},
        {name: 'Brazil', title:'AROMISTICO Coffee 1 kg', price: '6.99$', id: 4},
        {name: 'Brazil', title:'AROMISTICO Coffee 1 kg', price: '6.99$', id: 5},
        {name: 'Brazil', title:'AROMISTICO Coffee 1 kg', price: '6.99$', id: 6}
      ],
      term: '',
      filter: ''
    }
  }

  onSetTerm = (term) =>{
  this.setState({term})
  }

  onSetFilter = (filter) =>{
    this.setState({filter})
    }

  setTerm = (items, term) =>{
    if (term.length === 0) {
      return items
    }
    return items.filter(elem =>{
      return elem.name.indexOf(term) > -1
    })
  }
  setFilter = (items, filter) =>{
  switch (filter) {
    case 'Brazil':
      return items.filter(elem => elem.name === 'Brazil')
    case 'Kenya':
      return items.filter(elem => elem.name === 'Kenya')  
    case 'Columbia':
      return items.filter(elem => elem.name === 'Columbia')
    default:
      return items
  }
  }
  render(){
    const {data, term, filter} = this.state
    const final = this.setFilter(this.setTerm(data, term), filter);

    return(
      <div className="wrapper">
        <Header/>
        <About/>
        <SearchFilter findFilter = {this.onSetFilter} findTerm = {this.onSetTerm}/>
        <CoffeList data = {final}/>
      </div>
    )
  } 

}

export default App;