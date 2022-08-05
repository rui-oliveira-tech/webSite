import React from "react";

export default function Vcard({ type }) {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/vcard/" + type)
            .then((res) => res.json())
            .then((data) => setData(data.message));

    }, [type]);


    return (
        <>
            <p>{!data ? "Loading " + type + " ..." : data}</p>
            {/*   <Navigate to="/vcard.vcf" /> */}
        </>
    )
}