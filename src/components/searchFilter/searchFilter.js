import './searchFilter.scss';
import { useState } from 'react';

const SearchFilter = (props) => {
const [term, setTerm] = useState('');

const onSetTerm = (e) =>{
let word = e.target.value;
setTerm(word)
props.findTerm(word)
}

  const buttons = [
    {clazz:'searchFilter__Brazil', name: 'Brazil'},
    {clazz:'searchFilter__Kenya', name: 'Kenya'},
    {clazz:'searchFilter__Columbia', name: 'Columbia'},
    {clazz:'searchFilter__All', name: 'All'}
  ]

  const res = buttons.map(elem =>{
    return (
    <button onClick={()=> props.findFilter(elem.name) } key={elem.name} className={elem.clazz}>{elem.name}</button>
    )
  })
  return(
    <section className="searchFilter">
      <div className="container">
      <div className="searchFilter__wrapper">
        <div className="searchFilter__search">
          <label className="searchFilter__label" htmlFor="search">Looking for</label>
          <input value={term} onChange={onSetTerm} id="search" className="searchFilter__input"
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
  


export default SearchFilter;