export interface IExpressions {
    globals: ExpressionGlobals;
    prepositions: Prepositions;
    offerTypes: OfferTypes;
    places: OfferPlaces;
    countries: Countries;
    languages: Languages;
    languagesLevels: LanguageLevels;
    months: Months;
}

interface ExpressionGlobals {
    sex: string;
    dateOfBirth: string;
    nationality: string;
    page: string;
}

interface Prepositions {
    in: string;
}

interface OfferTypes {
    "Full-time": string;
    Internship: string;
    permanent: string;
    valid: string;
    expired: string;
    validDiplom: string;
    expiredDiplom: string;
    duplicateDiplom: string;
}

interface OfferPlaces {
    antwerp: string;
    brech: string;
}

interface Countries {
    NL: string;
    BE: string;
    PT: string;
    D: string;
}

interface Languages {
    pt: string;
    fr: string;
    en: string;
    es: string;
    nl: string;
}

interface LanguageLevels {
    native: string;
    professional: string;
    conversational: string;
}

interface Months {
    present: string;
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
    "7": string;
    "8": string;
    "9": string;
    "10": string;
    "11": string;
    "12": string;
}
