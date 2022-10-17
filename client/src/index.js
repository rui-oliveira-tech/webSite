import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './components/Languages/i18nextConf.js'
import './components/GoogleAnalytics/reactGAConf.js'

import { RedirectApp, RedirectVcard } from "./components/GoogleAnalytics/Redirects";
import Loading from "./components/Loading/Loading";

ReactDOM.render(
  <Suspense fallback={<></>}>
    <Loading />
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectApp />} />
          <Route path="/:type" element={<RedirectApp />} />
          <Route exact path="/vcard/:type" element={<RedirectVcard />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  </Suspense>,
  document.getElementById('root')
);