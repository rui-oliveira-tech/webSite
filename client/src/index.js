import React from "react";
import App from "./App";
import Vcard from "./components/vcard/Vcard";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vcard/work" element={<Vcard type={"work"} />} />
        <Route path="/vcard/vip" element={<Vcard type={"vip"} />} />
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

