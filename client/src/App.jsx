import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/Languages/i18nextConf.js';
import GoogleAnalyticsInitialize from './util/GoogleAnalytics/GoogleAnalyticsInitialize';


import RedirectApp, { RedirectToLink } from "./RedirectApp";
import Vcard from "./components/vcard/Vcard";
import Loading from "./components/Loading/Loading";

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Suspense fallback={<></>}>
      <GoogleAnalyticsInitialize />
{/*       <Loading setIsLoading={setIsLoading} /> */}
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RedirectApp isLoading={isLoading} />} />
            <Route path="/:lang" element={<RedirectApp isLoading={isLoading} />} />
            <Route path="/:lang/:page" element={<RedirectApp isLoading={isLoading} />} />
            <Route exact path="/vcard/:type" element={<Vcard isLoading={isLoading} />} />
            <Route exact path="/redirect/:from/:to" element={<RedirectToLink />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </Suspense>
  )
}

export default App;