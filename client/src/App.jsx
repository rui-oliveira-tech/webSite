import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/Languages/i18nextConf.js'
import GoogleAnalyticsInitialize from './util/GoogleAnalytics/GoogleAnalyticsInitialize'

import { RedirectApp, RedirectToLink } from "./RedirectApp";
import Vcard from "./components/vcard/Vcard";
import Loading from "./components/Loading/Loading";

export function App() {


  return (
    <Suspense fallback={<></>}>
      <GoogleAnalyticsInitialize />
      <Loading />
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RedirectApp />} />
            <Route path="/:lang" element={<RedirectApp />} />
            <Route path="/:lang/:page" element={<RedirectApp />} />
            <Route exact path="/vcard/:type" element={<Vcard />} />
            <Route exact path="/redirect/:from/:to" element={<RedirectToLink />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </Suspense>
  )
}

export default App;