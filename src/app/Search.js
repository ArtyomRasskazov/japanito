/**
  * Function retrns a custom search field
  */

import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

function Search(props) {
  let siteSearch = (props.lang === 'RU') ?
                        'Отправить отзыв' :
                        'Site search' ;

  return (
    <form className="Search">
      <input type="text" placeholder={siteSearch} />
      <button type="submit" className="red">
        <i className="fa fa-search white" />
      </button>
    </form>
  )
}

export default Search;
