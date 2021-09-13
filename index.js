const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type SkiDay {
    id: ID!
    date: String!
    mountain: String!
  }

  type Query {
    totalDays: Int!
    allDays: [SkiDay!]!
    condition: Conditions
  }

  enum Conditions {
    POWDER
    HEAVY
    ICE
    THIN
  }

  type Mutation {
    removeDay(id: ID!): SkiDay!
  }
`;

const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
