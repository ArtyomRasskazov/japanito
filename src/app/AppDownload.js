import React from 'react'
import googlePlayBadge from '../data/googlePlayBadge.png'
import appStoreBadge from '../data/appStoreBadge.svg'

function AppDownload() {
  return (
    <ul className="AppDownload">
      <li>
        <a href="https://www.apple.com/ru/ios/app-store/" target="_blank" rel="noreferrer noopener">
          <img src={appStoreBadge} alt="available on the App Store" />
        </a>
      </li>

      <li>
        <a href="https://play.google.com/store/" target="_blank" rel="noreferrer noopener">
          <img src={googlePlayBadge} alt="available on the Google Play" />
        </a>
      </li>
    </ul>
  )
}

export default AppDownload;
