import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

export default function Vcard() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/vcard/work")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);


    return (
        <>
            <p>{!data ? "Loading..." : data}</p>
          {/*   <Navigate to="/vcard.vcf" /> */}
        </>
    )
}