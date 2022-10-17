import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './components/Languages/i18nextConf.js'
import './components/GoogleAnalytics/reactGAConf.js'

import {Redirect_App, Redirect_Vcard} from "./components/GoogleAnalytics/Redirects";




const loadingMarkup = (

    <h3>Loading..</h3>

)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Redirect_App />} /> 
          <Route path="/:type" element={<Redirect_App />} /> 
          <Route exact path="/vcard/:type" element={<Redirect_Vcard />} />
          {/*   <Route path="*" element={
          <main>
            <h1>Nothing here</h1>
          </main>
        } /> */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

