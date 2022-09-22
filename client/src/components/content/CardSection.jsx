import React, { useEffect, useState } from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import CardSectionBrowserView from "./CardSectionBrowserView"
import CardSectionMobileView from "./CardSectionMobileView"

export default function CardSection() {
  return (
    <>
      <BrowserView>
        <CardSectionBrowserView />
      </BrowserView>
      <MobileView>
        <CardSectionMobileView />
      </MobileView>
    </>
  )
}
