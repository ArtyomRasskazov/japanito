import React from 'react'

function CopyRight(props) {
  let organization = (props.lang === 'ru') ?
                      'Ресторан японской кухни «Japanito»' :
                      'Japanese Restaurant «Japanito»' ;

  return (
    <div className="CopyRight">
      &copy; 2019 {organization}
    </div>
  )
}

export default CopyRight;
