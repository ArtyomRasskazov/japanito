import React from 'react'
import Logo from './Logo'
import PhoneNumber from './PhoneNumber'
import FollowUs from './FollowUs'
import CopyRight from './CopyRight'
import FooterMenu from './FooterMenu'
import Search from './Search'
import AppDownload from './AppDownload'

function Footer(props) {
  let sendTheComment = (props.lang === 'RU') ?
                        'Отправить отзыв' :
                        'Send the comment' ;
                        
  return (
    <div className="Footer">
      <Logo />
      <PhoneNumber />
      <FollowUs />
      <CopyRight lang={props.lang}/>

      <FooterMenu lang={props.lang}/>

      <Search lang={props.lang}/>
      <input type="button" className="red" value={sendTheComment} />
      <AppDownload />
    </div>
  )
}

export default Footer;
