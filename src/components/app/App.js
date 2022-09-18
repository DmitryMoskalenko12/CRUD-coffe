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
      term: ''
    }
  }

  onSetTerm = (term) =>{
  this.setState({term})
  }

  setTerm = (items, term) =>{
    if (term.length === 0) {
      return items
    }
    return items.filter(elem =>{
      return elem.name.indexOf(term) > -1
    })
  }
  render(){
    const term = this.setTerm(this.state.data, this.state.term)
    return(
      <div className="wrapper">
        <Header/>
        <About/>
        <SearchFilter findTerm = {this.onSetTerm}/>
        <CoffeList data = {term}/>
      </div>
    )
  } 

}

export default App;