
export interface Expressions {
    prepositions: Prepositions;
    globals: ExpressionGlobals;
    offerTypes: OfferTypes;
    countries: Countries;
    languages: Languages;
    months: Months;
}

interface Prepositions {
    in: string;
}

interface ExpressionGlobals {
    sex: string;
    dateOfBirth: string;
    nationality: string;
    page: string;
}

interface OfferTypes {
    fullTime: string;
    internship: string;
    permanent: string;
    valid: string;
    expired: string;
    validDiplom: string;
    expiredDiplom: string;
}

interface Countries {
    nl: string;
    be: string;
    pt: string;
    d: string;
}

interface Languages {
    pt: string;
    fr: string;
    en: string;
    es: string;
    nl: string;
}

interface Months {
    present: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
}

