import { gql } from "apollo-server-express";

const schema = gql`

type Contact {
	firstName: String
	lastName: String
	email: String
}

input ContactInput {
  firstName: String
	lastName: String
	email: String!
}


type PlaceLookup{
  PlaceId: String
	PlaceName: String
	CountryId: String
  RegionId: String
  CityId: String
  CountryName: String
}
type PlacesLookup {
  Places:[PlaceLookup]
}


type Currency {
	Code: String
	Symbol: String
	ThousandsSeparator: String
  DecimalSeparator: String
  SymbolOnLeft: String
  SpaceBetweenAmountAndSymbol: String
  RoundingCoefficient: String
  DecimalDigits: String
}
type Currencies {
	Place: [Currency]
}

type Country {
	Code: String
	Name: String
}

type Countries {
	Place: [Country]
}

type Places {
  Name: String
  Type: String
  PlaceId: Int
  IataCode: String
  SkyscannerCode: String
  CityName: String
  CityId: String
  CountryName: String
}

type Carriers {
  CarrierId: Int
  Name: String
}

type OutboundLeg {
  OriginId: Int
  DestinationId: Int
  DepartureDate: String
  CarrierIds: [Int]
}

type Quotes {
  QuoteId: Int
  MinPrice: Int
  Direct: Boolean
  QuoteDateTime: String
  InboundLeg: InboundLeg
  OutboundLeg: OutboundLeg
}

type BrowseQuotes {
  Currencies: [Currencies]
  Places: [Places]
  Carriers: [Carriers]
  Quotes: [Quotes]
}

type Routes {
  Price: Int
  QuoteDateTime: String
  OriginId: Int
  DestinationId: Int
  QuoteIds: [Int]
}

type InboundLeg {
  OriginId: Int
  DestinationId: Int
  DepartureDate: String
  CarrierIds: [Int]
}

type BrowseRoutesInbound {
  Routes: [Routes]
  Currencies: [Currencies]
  Places: [Places]
  Carriers: [Carriers]
  Quotes: [Quotes]
}
type BrowseQuotesInbound {
  Currencies: [Currencies]
  Places: [Places]
  Carriers: [Carriers]
  Quotes: [Quotes]
}

type InboundDates {
  PartialDate: String
  Price: Int
  QuoteDateTime: String
  QuoteIds: [Int]
}

type OutboundDates {
  PartialDate: String
  Price: Int
  QuoteDateTime: String
  QuoteIds: [Int]
}

type Dates {
  InboundDates: [InboundDates]
  OutboundDates: [OutboundDates]
}

type BrowseDatesInbound {
  Dates: Dates
  Currencies: [Currencies]
  Places: [Places]
  Carriers: [Carriers]
  Quotes: [Quotes]
}

type BrowseDates {
  Dates: Dates
  Currencies: [Currencies]
  Places: [Places]
  Carriers: [Carriers]
  Quotes: [Quotes]
}

type BrowseRoutes {
  Routes: [Routes]
  Currencies: [Currencies]
  Places: [Places]
  Carriers: [Carriers]
  Quotes: [Quotes]
}


input PlacesLookupInput {
  query: String!
  country: String!
  currency: String!
  locale: String!
}


type Mutation {
	createContact(input: ContactInput!): Contact
  ##
}

  type Query {
    "A simple type for getting started!"
    hello: String
    getContact(email: String!): Contact
    getPlaces(input: PlacesLookupInput!): Places
  }
`;

export default schema;
