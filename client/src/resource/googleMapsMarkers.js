//import Marker from "../images/maps/Marker.svg";


const Marker = process.env.PUBLIC_URL + "/images/maps/Marker.svg";
let id = 0;
const getNextId = () => {
    return ++id;
};

export const googleMapsMarkers = [
    //-----------------------// Portugal //-----------------------//
    {//extra
        id: getNextId(),
        country: "Portugal",
        city: "Peneda-Gerês National Park",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Braga",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Póvoa de Varzim",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Porto",
        marker: Marker,
        zoom: 12,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Vila Nova de Gaia",
        marker: Marker,
        zoom: 12,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Arouca",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Espinho",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Portugal",
        city: "Santa Maria da Feira",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "São João da Madeira",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Ovar",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Aveiro",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Águeda",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Viseu",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Portugal",
        city: "Serra da Estrela Natural Park",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Golegã",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Sintra",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Portugal",
        city: "Lisbon",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Spain //-----------------------//
    {
        id: getNextId(),
        country: "Spain",
        city: "Vigo",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Sevilla",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Cádiz",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Conil de la Frontera",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Tarifa",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Ronda",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Málaga",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Granada",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Alicante",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Valencia",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Madrid",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Logroño",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Zaragoza",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Barcelona",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Girona",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Spain",
        city: "Ibiza",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// France //-----------------------//
    {
        id: getNextId(),
        country: "France",
        city: "Lille",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Amiens",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Paris",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Bordeaux",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Toulouse",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Montpellier",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Marseille",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "France",
        city: "Nice",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Monaco //-----------------------//
    {
        id: getNextId(),
        country: "Monaco",
        city: "Monaco",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Italy //-----------------------//
    {
        id: getNextId(),
        country: "Italy",
        city: "Genoa",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Bologna",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Venice",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Florence",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Rome",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Frosinone",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Anzio",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Nettuno",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Naples",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Italy",
        city: "Vesuvius National Park",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Pompei",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Sorrento",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Positano",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Amalfi",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Maratea",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Italy",
        city: "Scilla",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Italy",
        city: "Gambarie",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Italy",
        city: "Aspromonte National Park",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Villa San Giovanni",
        marker: Marker,
        zoom: 10,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Messina",
        marker: Marker,
        zoom: 10,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Taormina",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Italy",
        city: "Mount Etna",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Catania",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Siracusa",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Noto",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Agrigento",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Italy",
        city: "Palermo",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Slovenia //-----------------------//
    {
        id: getNextId(),
        country: "Slovenia",
        city: "Ljubljana",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Croatia //-----------------------//
    {
        id: getNextId(),
        country: "Croatia",
        city: "Zagreb",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Croatia",
        city: "Koprivnica",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Hungary //-----------------------//
    {// Not Working
        id: getNextId(),
        country: "Hungary",
        city: "Zákány",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Hungary",
        city: "Pécs",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Hungary",
        city: "Budapest",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Slovakia //-----------------------//
    {
        id: getNextId(),
        country: "Slovakia",
        city: "Bratislava",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Austria //-----------------------//
    {
        id: getNextId(),
        country: "Austria",
        city: "Vienna",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Czechia //-----------------------//
    {
        id: getNextId(),
        country: "Czechia",
        city: "Prague",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Germany //-----------------------//
    {
        id: getNextId(),
        country: "Germany",
        city: "Berlin",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Netherlands //-----------------------//
    {
        id: getNextId(),
        country: "Netherlands",
        city: "Amsterdam",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Denmark //-----------------------//
    {
        id: getNextId(),
        country: "Denmark",
        city: "Copenhagen",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Sweden //-----------------------//
    {
        id: getNextId(),
        country: "Sweden",
        city: "Malmö",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Sweden",
        city: "Stockholm",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Belgium //-----------------------//
    {
        id: getNextId(),
        country: "Belgium",
        city: "Brecht",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Turnhout",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Herentals",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Antwerp",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Mechelen",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Brussels",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Leuven",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Namur",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Belgium",
        city: "Dinant",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Luxembourg //-----------------------//
    {
        id: getNextId(),
        country: "Luxembourg",
        city: "Luxembourg",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Egypt //-----------------------//
    {
        id: getNextId(),
        country: "Egypt",
        city: "Cairo",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Egypt",
        city: "Giza",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Egypt",
        city: "Luxor",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Egypt",
        city: "Aswān",
        marker: Marker,
        zoom: 9,
    },
    {
        id: getNextId(),
        country: "Egypt",
        city: "Idfū",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Egypt",
        city: "Abu Simbel",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Egypt",
        city: "Sharm el-Sheikh",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Egypt",
        city: "Dahab",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Egypt",
        city: "Nuweiba",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Egypt",
        city: "Taba Heights",
        marker: Marker,
        zoom: 9,
    },
    { //extra
        id: getNextId(),
        country: "Egypt",
        city: "Taba",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Israel //-----------------------//
    {
        id: getNextId(),
        country: "Israel",
        city: "Eilat",
        marker: Marker,
        zoom: 9,
    },
    //-----------------------// Jordan //-----------------------//
    {
        id: getNextId(),
        country: "Jordan",
        city: "Al ‘Aqabah",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Jordan",
        city: "Tala Bay Aqaba",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Jordan",
        city: "Wadi Rum",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Jordan",
        city: "Wadi Musa",
        marker: Marker,
        zoom: 9,
    },
    {//extra
        id: getNextId(),
        country: "Jordan",
        city: "Wadi AlMujib",
        marker: Marker,
        zoom: 9,
    },
];
