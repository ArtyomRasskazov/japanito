import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

function Search() {
  return (
    <form className="Search">
      <input type="text" placeholder="Поиск по сайту" />
      <button type="submit" className="red">
        <i className="fa fa-search white" />
      </button>
    </form>
  )
}

export default Search;
