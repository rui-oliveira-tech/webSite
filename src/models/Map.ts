export type Point = {
    id?: number;
    type: "Feature";
    properties: {
        cluster?: boolean;
        markersId: number;
        city: string;
        country: string;
        point_count?: number;
    };
    geometry: {
        type: "Point";
        zoom: number;
        marker: string;
        coordinates: [number, number];
    };
};

export type Data = {
    city: string;
    city_ascii: string;
    lat: number;
    lng: number;
    country: string;
    iso2: string;
    iso3: string;
    admin_name: string;
    population: number;
    id: number;
};

export type Values = {
    data: Data[];
};

export type TypeMap = {
    [key: string]: number;
};