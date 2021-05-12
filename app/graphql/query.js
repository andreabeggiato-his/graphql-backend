const typeDefinition = `
  type Query {
    hello(name: String!): String!
  }
`;

const resolver = {
  Query: {
    hello: (source, args, context) => {
      return `Hello ${args.name}`
    },
  },
};

module.exports = {
  typeDefinition,
  resolver
};
