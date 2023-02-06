import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/Languages/i18nextConf.js'
import GoogleAnalyticsInitialize from './util/GoogleAnalytics/GoogleAnalyticsInitialize'

import { RedirectApp, RedirectToLink } from "./App";
import Vcard from "./components/vcard/Vcard";
import Loading from "./components/Loading/Loading";

ReactDOM.render(
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
  </Suspense>,
  document.getElementById('root')
);