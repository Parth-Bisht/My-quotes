import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [QuoteWithName]
    iquote(by: ID!): [Quote]
  }
  type QuoteWithName{
    name: String
    by:IDName
  }
  type IDName{
    _id: String
    first_name: String
  }
  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    quotes: [Quote]
  }
  type Quote {
    name: String
    by: ID
  }
  type Token {
    token: String
  }
  type Mutation {
    signupUser(userNew: UserInput!): User
    signinUser(userSignin: UserSigninInput!): Token
    createQuote(name:String!): String
  }
  input UserInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }
  input UserSigninInput {
    email: String!
    password: String!
  }
`;

export default typeDefs;
