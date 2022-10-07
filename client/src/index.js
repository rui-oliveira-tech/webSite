import React from "react";
import App from "./App";
import Vcard from "./components/vcard/Vcard";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactGA from 'react-ga4';

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID ; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
// To Report Page View 
ReactGA.send({ hitType: "pageview", page: "/my-path" });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/vcard/:type" element={<Vcard />} />
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

