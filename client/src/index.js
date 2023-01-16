import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/Languages/i18nextConf.js'
import './components/GoogleAnalytics/reactGAConf.js'

import { RedirectApp, RedirectVcard, RedirectToLink } from "./App";
import Loading from "./components/Loading/Loading";

ReactDOM.render(
  <Suspense fallback={<></>}>
    {/*   <Loading /> */}
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectApp />} />
          <Route path="/:lang" element={<RedirectApp />} />
          <Route path="/:lang/:page" element={<RedirectApp />} />

          <Route exact path="/vcard/:type" element={<RedirectVcard />} />
          <Route exact path="/redirect/:from/:to" element={<RedirectToLink />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);