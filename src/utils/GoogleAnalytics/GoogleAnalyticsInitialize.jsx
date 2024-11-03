import React from "react"
import TagManager from 'react-gtm-module'

export default function GoogleAnalyticsInitialize() {
  const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GOOGLE_ANALYTICS_GTM_ID
}

  TagManager.initialize(tagManagerArgs)
  return (
    <></>
  )
}