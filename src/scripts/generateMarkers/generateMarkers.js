import fs from "fs";
import path from "path";
import csv from "csv-parser";
import googleMapsMarkers from "../../resource/mapMarkers.js";

console.error("CSV's loaded");

async function readCsvFile(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row) => results.push(row))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

function parseRows(data) {
  const type = {};
  if (data.length > 0) {
    const keys = Object.keys(data[0]);
    keys.forEach((header, i) => {
      type[header] = i;
    });
  }
  return [
    data.slice(1).map((row) => ({
      city: row.city,
      city_ascii: row.city_ascii,
      lat: +row.lat,
      lng: +row.lng,
      country: row.country,
      iso2: row.iso2,
      iso3: row.iso3,
      admin_name: row.admin_name,
      population: +row.population,
      id: +row.id,
    })),
    type,
  ];
}

function processNewMarkers(markers, results, type) {
  const newMarkers = markers.reduce((total, marker) => {
    const country = results.filter((row) => row.country === marker.country);
    const cities = country.filter((row) => row.city === marker.city);
    const cityMarkers = cities.map((city) => ({
      type: "Feature",
      properties: {
        markersId: +city.id,
        city: city.city,
        country: city.country,
      },
      geometry: {
        type: "Point",
        zoom: +marker.zoom,
        marker: marker.marker,
        coordinates: [+city.lng, +city.lat],
      },
    }));

    return total.concat(cityMarkers);
  }, []);
  return newMarkers;
}

console.error("CSV's loaded");

(async () => {
  console.error("CSV's loaded");
  try {
    const csv1 = await readCsvFile("./public/maps/worldcities.csv");
    const csv2 = await readCsvFile("./public/maps/worldexteacities.csv");
    if (csv1 && csv2) {
      const [cities, citiesProps] = parseRows(csv1);
      const [extraCities, extraCitiesProps] = parseRows(csv2);

      const directory = "./src/resource/generated";
      const filename = "processedGoogleMapsMarkers.json";
      const filePath = path.join(directory, filename);

      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
        console.error(`Created directory: ${directory}`);
      }

      fs.writeFileSync(
        filePath,
        JSON.stringify(
          [
            ...processNewMarkers(googleMapsMarkers, cities, citiesProps),
            ...processNewMarkers(
              googleMapsMarkers,
              extraCities,
              extraCitiesProps
            ),
          ],
          undefined,
          4
        )
      );
      console.error(`File written: ${filePath}`);
    } else {
      console.error("NO CSVS!");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  console.error("CSV's processed and data written to file");
})();
