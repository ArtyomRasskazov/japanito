import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

function FollowUs() {
  return (
    <ul className="FollowUs">
      <li>
        <a href="https://vk.com/" target="_blank" rel="noreferrer noopener">
          <i className="fa fa-vk" />
        </a>
      </li>

      <li>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
          <i className="fa fa-facebook-f" />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
          <i className="fa fa-instagram" />
        </a>
      </li>
    </ul>
  )
}

export default FollowUs;
