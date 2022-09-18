import './searchFilter.scss';
import {Component} from 'react';
class SearchFilter extends Component {
constructor(props){
  super(props);
  this.state ={
    term:''
  }
}

onSetTerm = (e) =>{
let word = e.target.value;
this.setState({term: word })
this.props.findTerm(word)
}

render(){
  const buttons = [
    {clazz:'searchFilter__Brazil', name: 'Brazil'},
    {clazz:'searchFilter__Kenya', name: 'Kenya'},
    {clazz:'searchFilter__Columbia', name: 'Columbia'},
    {clazz:'searchFilter__All', name: 'All'}
  ]

  const res = buttons.map(elem =>{
    return (
    <button onClick={()=> this.props.findFilter(elem.name) } key={elem.name} className={elem.clazz}>{elem.name}</button>
    )
  })
  return(
    <section className="searchFilter">
      <div className="container">
      <div className="searchFilter__wrapper">
        <div className="searchFilter__search">
          <label className="searchFilter__label" htmlFor="search">Looking for</label>
          <input value={this.state.term} onChange={this.onSetTerm} id="search" className="searchFilter__input"
           name="searchname" 
           type="text" 
           required placeholder="start typing here..." />
        </div>

        <div className="searchFilter__filter">
          <div className="searchFilter__text">Or filter</div>
          <div className="searchFilter__buttons">
        {res}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
  
}

export default SearchFilter;