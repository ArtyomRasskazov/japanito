import React from 'react'
import Logo from './Logo'
import PhoneNumber from './PhoneNumber'
import FollowUs from './FollowUs'
import CopyRight from './CopyRight'
import FooterMenu from './FooterMenu'
import Search from './Search'
import AppDownload from './AppDownload'

function Footer() {
  return (
    <div className="Footer">
      <Logo />
      <PhoneNumber />
      <FollowUs />
      <CopyRight />

      <FooterMenu />

      <Search />
      <input type="button" value="Отправить отзыв" />
      <AppDownload />
    </div>
  )
}

export default Footer;
