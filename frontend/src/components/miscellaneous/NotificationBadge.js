import React from 'react'
import "./styles.css"

const NotificationBadge = ({ count }) => {
  return (count > 0 && 
    (<span className="notificationBadge">{count}</span>)
  )
}

export default NotificationBadge