import React from "react";
import App from "./App";
import Vcard from "./components/vcard/Vcard";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'


 
const tagManagerArgs = {
    gtmId: 'GTM-MDWT5P6'
}
 
TagManager.initialize(tagManagerArgs)



ReactGA.initialize('G-6NZY9LSDTM');
// To Report Page View 
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/vcard/:type" element={<Vcard/>} />
        {/*   <Route path="*" element={
          <main>
            <h1>Nothing here</h1>
          </main>
        } /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

